import { Quad, DataFactory, Parser, Store } from "n3";
import { TestCase } from "../Interfaces";
import { DCT } from "../Vocabularies";

const { quad, namedNode, literal } = DataFactory

/**
 * Converts a list of test cases into RDF Quads and creates an index.
 * 
 * This method processes each `TestCase` object by:
 * - Transforming the source fields (e.g., `policy`, `request`, etc.) from local paths to URIs using `transformSourceTestCase`.
 * - Generating RDF Quads for the transformed test case via `createQuadsTestCase`.
 * 
 * @param testCases - An array of `TestCase` objects to process.
 * @param baseIRI - The base IRI that replaces the directory paths in the source fields.
 * @returns An array of `Quad` objects that represents the transformed test cases.
 */
export function createIndex(testCases: TestCase[], config: { baseIRI: string, projectDirectory: string }): Quad[] {
    const quads: Quad[] = []
    for (const testCase of testCases) {
        const transformed = transformSourceTestCase(testCase, config)
        quads.push(...createQuadsTestCase(transformed));
    }
    return quads
}

/**
 * Transforms the source fields (e.g., policy, request, etc.) of a test case
 * from local file paths to URIs based on the provided base IRI.
 * 
 * @param testCase - The `TestCase` object to transform.
 * @param baseIRI - The base IRI to replace local file paths in sources.
 * @returns A transformed `TestCase` object with updated source URIs.
 */
export function transformSourceTestCase(testCase: TestCase, config: { baseIRI: string, projectDirectory: string }): TestCase {
    return {
        identifier: testCase.identifier,
        policy: transformSource(testCase.policy, config),
        request: transformSource(testCase.request, config),
        stateOfTheWorld: transformSource(testCase.stateOfTheWorld, config),
        expectedReport: transformSource(testCase.expectedReport, config),
        title: testCase.title,
    }

}

/**
 * Converts a single input source (such as a policy or request) from
 * a local file path to a URI based on the provided base IRI.
 * 
 * @param input - An object containing the source, identifier, and RDF quads.
 * @param baseIRI - The base IRI to replace the directory path in the source field.
 * @returns A transformed source object with the updated URI.
 */
export function transformSource(input: { identifier: string, quads: Quad[], source: string }, config: { baseIRI: string, projectDirectory: string }): { identifier: string, quads: Quad[], source: string } {
    const output = {
        identifier: input.identifier,
        quads: input.quads,
        source: input.source.replace(config.projectDirectory + '/', config.baseIRI)
    }
    return output
}

/**
 * Creates RDF Quads for a test case. Converts fields such as policy, request,
 * state of the world, and expected report into RDF statements.
 * 
 * @param testCase - The `TestCase` object for which to create RDF Quads.
 * @returns An array of `Quad` objects representing the test case in RDF.
 */
export function createQuadsTestCase(testCase: TestCase): Quad[] {
    /* 
    example output:
        <urn:uuid:e2123eb7-0707-4f24-bcc0-9d61dd9088a9> a ex:TestCase;
        dct:title "Any request results into yes (Alice Request).";
        ex:policySource <urn:uuid:4cbd8f38-348b-4b09-8e1a-04b47c97ad78>;
        ex:requestSource <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
        ex:sotwSource <urn:uuid:d63ea76e-0aed-4e4e-9a8c-0b7083ebc6e2>;
        ex:expectedReportSource <urn:uuid:75a52a92-5872-480e-9380-f7d9f2a53e94>.
     */
    const quads: Quad[] = []
    quads.push(quad(namedNode(testCase.identifier), DCT.terms.title, literal(testCase.title)));
    quads.push(quad(namedNode(testCase.identifier), namedNode('http://example.org/' + 'policySource'), namedNode(testCase.policy.source)));
    quads.push(quad(namedNode(testCase.identifier), namedNode('http://example.org/' + 'requestSource'), namedNode(testCase.request.source)));
    quads.push(quad(namedNode(testCase.identifier), namedNode('http://example.org/' + 'sotwSource'), namedNode(testCase.stateOfTheWorld.source)));
    quads.push(quad(namedNode(testCase.identifier), namedNode('http://example.org/' + 'expectedReportSource'), namedNode(testCase.expectedReport.source)));
    return quads
}

/**
 * Loads a hosted test case using a provided index and test case identifier.
 * 
 * The method fetches and parses data sources (policy, request, and state of the world)
 * from their respective IRIs in the index and constructs a `TestCase` object.
 * 
 * @param testCaseID - The unique identifier of the test case to load.
 * @param index - An array of RDF `Quad` objects representing the hosted index.
 * @returns A `Promise` resolving to the constructed `TestCase` object.
 */
export async function loadWebTestCase(testCaseID: string, index: Quad[]): Promise<TestCase> {
    /**
     * Fetches and parses RDF data from a given URL.
     * 
     * The data is expected to be in plain text format but is parsed as RDF Quads.
     * 
     * @param url - The URL of the hosted data to fetch.
     * @returns A `Promise` resolving to an array of RDF `Quad` objects.
     */
    async function loadData(url: string): Promise<Quad[]> {
        const parser = new Parser()
        const policyResponse = await fetch(url);
        const policyText = await policyResponse.text();
        return parser.parse(policyText);
    }
    const store = new Store(index);
    const policyIRI = store.getObjects(testCaseID, 'http://example.org/policySource', null)[0].value;
    const requestIRI = store.getObjects(testCaseID, 'http://example.org/requestSource', null)[0].value;
    const sotwIRI = store.getObjects(testCaseID, 'http://example.org/sotwSource', null)[0].value;
    const reportIRI = store.getObjects(testCaseID, 'http://example.org/expectedReportSource', null)[0].value;

    return {
        identifier: testCaseID,
        policy: {
            identifier: "", // could be extracted from the quads in this object
            quads: await loadData(policyIRI),
            source: policyIRI
        },
        request: {
            identifier: "", // could be extracted from the quads in this object
            quads: await loadData(requestIRI),
            source: requestIRI
        },
        stateOfTheWorld: {
            identifier: "", // could be extracted from the quads in this object
            quads: await loadData(sotwIRI),
            source: sotwIRI
        },
        expectedReport: {
            identifier: "", // if the quads were fetched, could be extracted from the quads in this object
            quads: [], // could be fetched as well, but not required
            source: reportIRI
        },
        title: store.getObjects(testCaseID, DCT.title, null)[0].value,
    }
}
