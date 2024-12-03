import {DataFactory, Quad, Store, Term} from "n3";
import {RDF, REPORT} from "../Vocabularies";
import {extractGraph} from "../RDFUtil";
import {ComplianceReport, ConstraintReportProperties} from "../Interfaces";

const { namedNode } = DataFactory
/**
 * Get the identifier of a compliance policy report.
 * The expectation is that there is only one present.
 * @param quads
 * @returns
 */
export function getReportIdentifier(quads: Quad[]): string {
    const store = new Store(quads);
    const reportNodes = store.getQuads(null, RDF.terms.type, REPORT.terms.PolicyReport, null);

    if (reportNodes.length !== 1) {
        throw Error(`Expected one expected report identifier. Found ${reportNodes.length}`);
    }
    return reportNodes[0].subject.id;
}

/**
 * Create a {@link ComplianceReport} given a {@link Store}.
 * When no reportID is given, this will only succeed when there is only one compliance report present in the store.
 * When a reportID is given, this will only succeed when this is present
 *
 * @param store
 * @param reportID
 * @param sourceFileName
 * @returns
 */
export function getExpectedReport(store: Store, reportID?: string, sourceFileName?: string): ComplianceReport {
    let identifier = "";
    if (reportID !== undefined) {
        if (store.getQuads(namedNode(reportID), null, null, null).length === 0) {
            throw Error("Report ID extracted from graph does not match provided");
        }
        identifier = reportID;
    } else {
        identifier = getReportIdentifier(store.getQuads(null, null, null, null));
    }

    const reportQuads = extractGraph(identifier, store);
    return {
        identifier: identifier,
        source: sourceFileName ?? "None",
        quads: reportQuads
    };
}

/**
 * Retrieves the rule report identifier from a {@link ComplianceReport}.
 *
 * @param complianceReport - The compliance report containing the quads.
 * @returns The term representing the rule report identifier.
 * @throws Will throw an error if there is not exactly one rule report in the compliance report.
 */
export function getRuleReportIdentifier(complianceReport: ComplianceReport): Term {
    const store = new Store(complianceReport.quads);
    const ruleReportTerms = store.getObjects(namedNode(complianceReport.identifier), REPORT.terms.ruleReport, null)
    if (ruleReportTerms.length !== 1) {
        throw Error("Expected one rule report in the compliance report")
    }
    return ruleReportTerms[0];
}

/**
 * Retrieves the activation state from a {@link ComplianceReport}.
 *
 * @param complianceReport - The compliance report containing the quads.
 * @returns The activation state as a string.
 * @throws Will throw an error if there is not exactly one activation state in the compliance report.
 */
export function getActivationState(complianceReport: ComplianceReport): string {
    const store = new Store(complianceReport.quads);
    const ruleReportTerm = getRuleReportIdentifier(complianceReport);

    const activationStateTerms = store.getObjects(ruleReportTerm, REPORT.terms.activationState, null);
    if (activationStateTerms.length !== 1) {
        throw Error(`Expected an (exact one) activation state in the compliance report`);
    }
    return activationStateTerms[0].id;
}

/**
 * Retrieves the attempted state from a {@link ComplianceReport}.
 *
 * @param complianceReport - The compliance report containing the quads.
 * @returns The attempted state as a string.
 * @throws Will throw an error if there is not exactly one attempted state in the compliance report.
 */
export function getAttemptState(complianceReport: ComplianceReport): string {
    const store = new Store(complianceReport.quads);
    const ruleReportTerm = getRuleReportIdentifier(complianceReport);

    const attemptStateTerms = store.getObjects(ruleReportTerm, REPORT.terms.attemptState, null);
    if (attemptStateTerms.length !== 1) {
        throw Error(`Expected an (exact one) attempted state in the compliance report`);
    }
    return attemptStateTerms[0].id;
}

/**
 * Retrieves the requested rule identifier from a {@link ComplianceReport}.
 *
 * @param complianceReport - The compliance report containing the quads.
 * @returns The requested rule identifier as a string.
 * @throws Will throw an error if there is not exactly one rule request in the compliance report.
 */
export function getRequestedRuleIdentifier(complianceReport: ComplianceReport): string {
    const store = new Store(complianceReport.quads);
    const ruleReportTerm = getRuleReportIdentifier(complianceReport);

    const requestedRuleTerms = store.getObjects(ruleReportTerm, REPORT.terms.ruleRequest, null);
    if (requestedRuleTerms.length !== 1){
        throw Error(`Expected one rule request in the compliance report`);
    }
    return requestedRuleTerms[0].id;
}
/**
 * Retrieves the policy rule identifier from a {@link ComplianceReport}.
 *
 * @param complianceReport - The compliance report containing the quads.
 * @returns The policy rule identifier as a string.
 * @throws Will throw an error if there is not exactly one policy rule in the compliance report.
 */
export function getPolicyRuleIdentifier(complianceReport: ComplianceReport): string {
    const store = new Store(complianceReport.quads);
    const ruleReportTerm = getRuleReportIdentifier(complianceReport);

    const policyRuleTerms = store.getObjects(ruleReportTerm, REPORT.terms.rule, null);
    if (policyRuleTerms.length !== 1) {
        throw Error(`Expected one policy rule in the compliance report`);
    }
    return policyRuleTerms[0].id;
}


/**
 * Get the identifiers of a compliance Constraint Reports.
 *
 * Classes of compliance Constraint Reports are:
 * * Target Report
 * * Action Report
 * * Party Report
 * * Constraint Report
 *
 * @param quads
 * @returns
 */
export function getConstraintReportIdentifiers(quads: Quad[]): string[] {
    const store = new Store(quads);
    const premiseReportNodes: Quad[] = [];
    premiseReportNodes.push(
        ...store.getQuads(null, RDF.terms.type, REPORT.terms.TargetReport, null),
        ...store.getQuads(null, RDF.terms.type, REPORT.terms.ActionReport, null),
        ...store.getQuads(null, RDF.terms.type, REPORT.terms.PartyReport, null),
        ...store.getQuads(null, RDF.terms.type, REPORT.terms.ConstraintReport, null)
    );
    const premiseReportIdentifiers = premiseReportNodes.map(quad => quad.subject.id)
    return premiseReportIdentifiers;
}

/**
 * Queries the compliance report in search of the constraint report type, satisfaction state and (optionally) the constraint it refers to.
 * The output combines the above query with the constraint report identifier in an object of type {@link ConstraintReportProperties}.
 *
 * @param complianceReport
 * @param premiseReportIdentifier
 */
export function getConstraintReportProperties(complianceReport: ComplianceReport, premiseReportIdentifier: string): ConstraintReportProperties {
    const store = new Store(complianceReport.quads);
    const constrainReportNode = namedNode(premiseReportIdentifier);

    const constraintTypes = store.getQuads(constrainReportNode, RDF.terms.type, null, null);
    if (constraintTypes.length !== 1) throw Error("Expected only one type for a Constraint Report.");
    const constraintType = constraintTypes[0].object.value;

    const premiseReportStates = store.getObjects(constrainReportNode, REPORT.satisfactionState, null);
    const premiseReportState = premiseReportStates.length === 1 ? premiseReportStates[0].value : undefined;

    let referencedConstraint: string | undefined;
    if (constraintType === REPORT.ConstraintReport) {
        const referencedConstraints = store.getObjects(constrainReportNode, REPORT.constraint, null);
        referencedConstraint = referencedConstraints.length === 1 ? referencedConstraints[0].value : undefined;
        // Note: maybe we should throw an error if there were more than 1?
    }

    return {
        type: constraintType,
        refencedConstraint: referencedConstraint,
        premiseReportIdentifier: premiseReportIdentifier,
        satisfactionState: premiseReportState
    }
}
/**
 * Queries the compliance report in search of the constraint report identifier and its satisfaction state.
 * The output combines the above query with the constraint report type and (optionally) the constraint it refers to in an object of type {@link ConstraintReportProperties}.
 *
 * @param complianceReport - The compliance report containing the quads.
 * @param premiseReportType - The type of Constraint Report using Compliance Report terminology
 * @param constraint - (opt) in case of a ConstraintReport, this needs to be present. It references to constraint url (ODRL)
 * @returns
 */
export function getConstraintPropertiesFromType(complianceReport: ComplianceReport, premiseReportType: string, constraint?: string): ConstraintReportProperties | undefined{
    const store = new Store(complianceReport.quads);

    // all constraint reports with type `premiseReportType
    const premiseReportTerms = store.getSubjects(RDF.terms.type, namedNode(premiseReportType), null);
    const wantedConstraintReportTerms: Term[] = [];

    if (constraint !== undefined) {
        // constraint report referencing a constraint
        for (const premiseReportTerm of premiseReportTerms) {
            const constraintOfTypeExists = store.getQuads(premiseReportTerm, RDF.terms.type, namedNode(premiseReportType), null).length === 1;
            const referencedConstraintCheck = store.getQuads(premiseReportTerm, REPORT.terms.constraint, namedNode(constraint), null).length === 1;
                if (referencedConstraintCheck && constraintOfTypeExists) {
                    wantedConstraintReportTerms.push(premiseReportTerm);
                }
            }
    } else {
        // target, party or action report
        wantedConstraintReportTerms.push(...premiseReportTerms)
    }

    if (wantedConstraintReportTerms.length > 1){
        let extraMessage = constraint !== undefined ? `referencing constraint ${constraint}` : "";
        throw Error(`Multiple constraint reports found of type ${premiseReportType} ${extraMessage}.`);
    }

    if (wantedConstraintReportTerms.length === 0) {
        // no constraint report of that type, thus also no satisfaction state
        return undefined;
    }

    const premiseReportStates = store.getObjects(wantedConstraintReportTerms[0], REPORT.satisfactionState, null);
    const premiseReportState = premiseReportStates.length === 1 ? premiseReportStates[0].value : undefined;

    return {
        type: premiseReportType,
        refencedConstraint: constraint,
        premiseReportIdentifier: wantedConstraintReportTerms[0].id,
        satisfactionState: premiseReportState
    }
}
