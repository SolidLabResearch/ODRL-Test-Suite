import {DataFactory, Quad, Store} from "n3";
import {StateOfTheWorld} from "../Interfaces";
import {RDF, SOTW, SOTWold} from "../Vocabularies";
import {extractGraph} from "../RDFUtil";
import namedNode = DataFactory.namedNode;
/**
 * Create a {@link StateOfTheWorld} given a {@link Store}.
 *
 * @param store
 * @param sotwIdentifier
 * @param sourceFileName
 * @returns
 */
export function getStateOfTheWorldOld(store: Store, sotwIdentifier?: string, sourceFileName?: string): StateOfTheWorld {
    const sotwQuads : Quad[] = []

    const stateOfTheWorldIdentifierInStore = getStateOfTheWorldIdentifierOld(store.getQuads(null, null, null, null));
    if (sotwIdentifier !== undefined && sotwIdentifier !== stateOfTheWorldIdentifierInStore) {
        throw Error("State of the world identifier extracted from graph does not match provided");
    }
    for (const quad of store.getQuads(namedNode(stateOfTheWorldIdentifierInStore), SOTWold.terms.includes, null,null)) {
        const extractedSotwEntity = extractGraph(quad.object.id, store)
        sotwQuads.push(...extractedSotwEntity)
    }
    return {
        identifier: stateOfTheWorldIdentifierInStore,
        quads: sotwQuads,
        source: sourceFileName ?? ""
    }
}

/**
 * Get the identifier for the state of the world graph subject.
 * The expectation is that there is only one present.
 * @param quads
 * @returns
 */
export function getStateOfTheWorldIdentifierOld(quads: Quad[]): string {
    const store = new Store(quads);
    const stateOfTheWorldNodes = store.getQuads(null, RDF.terms.type, SOTWold.terms.Sotw, null);

    if (stateOfTheWorldNodes.length !== 1) {
        throw Error(`Expected one state of the world group identifier. Found ${stateOfTheWorldNodes.length}`);
    }
    return stateOfTheWorldNodes[0].subject.id;
}

/**
 * Create a {@link StateOfTheWorld} given a {@link Store}.
 *
 * @param store
 * @param sotwIdentifier
 * @param sourceFileName
 * @returns
 */
export function getStateOfTheWorld(store: Store, sotwIdentifier?: string, sourceFileName?: string): StateOfTheWorld {
    const stateOfTheWorldIdentifierInStore = getStateOfTheWorldIdentifier(store.getQuads(null, null, null, null));
    if (sotwIdentifier !== undefined && sotwIdentifier !== stateOfTheWorldIdentifierInStore) {
        throw Error("State of the world identifier extracted from graph does not match provided");
    }    
    const sotwQuads = extractGraph(sotwIdentifier, store);
    return {
        identifier: stateOfTheWorldIdentifierInStore,
        quads: sotwQuads,
        source: sourceFileName ?? ""
    }
}

/**
 * Get the identifier for the state of the world graph subject, according to https://w3id.org/force/sotw
 * The expectation is that there is only one present.
 * @param quads
 * @returns
 */
export function getStateOfTheWorldIdentifier(quads: Quad[]): string {
    const store = new Store(quads);
    const stateOfTheWorldNodes = store.getQuads(null, RDF.terms.type, SOTW.terms.SotW, null);

    if (stateOfTheWorldNodes.length !== 1) {
        throw Error(`Expected one state of the world group identifier. Found ${stateOfTheWorldNodes.length}`);
    }
    return stateOfTheWorldNodes[0].subject.id;
}
