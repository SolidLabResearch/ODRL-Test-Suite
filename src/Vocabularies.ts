import { DataFactory } from 'n3';
import type { NamedNode } from '@rdfjs/types';

// copied from https://github.com/CommunitySolidServer/CommunitySolidServer/blob/4599bf413e0ca08725d22b5e01fe43e97ef7d714/src/util/Vocabularies.ts
/**
 * A `Record` in which each value is a concatenation of the baseUrl and its key.
 */
type ExpandedRecord<TBase extends string, TLocal extends string> = { [K in TLocal]: `${TBase}${K}` };

/**
 * Has a base URL as `namespace` value and each key has as value the concatenation with that base URL.
 */
type ValueVocabulary<TBase extends string, TLocal extends string> =
    { namespace: TBase } & ExpandedRecord<TBase, TLocal>;
/**
 * A {@link ValueVocabulary} where the URI values are {@link NamedNode}s.
 */
type TermVocabulary<T> = T extends ValueVocabulary<string, string> ? { [K in keyof T]: NamedNode<T[K]> } : never;

/**
 * Contains a namespace and keys linking to the entries in this namespace.
 * The `terms` field contains the same values but as {@link NamedNode} instead of string.
 */
export type Vocabulary<TBase extends string, TKey extends string> =
    ValueVocabulary<TBase, TKey> & { terms: TermVocabulary<ValueVocabulary<TBase, TKey>> };

/**
 * A {@link Vocabulary} where all the non-namespace fields are of unknown value.
 * This is a fallback in case {@link createVocabulary} gets called with a non-strict string array.
 */
export type PartialVocabulary<TBase extends string> =
    { namespace: TBase } &
    Partial<Record<string, string>> &
    { terms: { namespace: NamedNode<TBase> } & Partial<Record<string, NamedNode>> };

/**
 * A local name of a {@link Vocabulary}.
 */
export type VocabularyLocal<T> = T extends Vocabulary<string, infer TKey> ? TKey : never;
/**
 * A URI string entry of a {@link Vocabulary}.
 */
export type VocabularyValue<T> = T extends Vocabulary<string, infer TKey> ? T[TKey] : never;
/**
 * A {@link NamedNode} entry of a {@link Vocabulary}.
 */
export type VocabularyTerm<T> = T extends Vocabulary<string, infer TKey> ? T['terms'][TKey] : never;

/**
 * Creates a {@link ValueVocabulary} with the given `baseUri` as namespace and all `localNames` as entries.
 */
function createValueVocabulary<TBase extends string, TLocal extends string>(baseUri: TBase, localNames: TLocal[]):
    ValueVocabulary<TBase, TLocal> {
    const expanded: Partial<ExpandedRecord<TBase, TLocal>> = {};
    // Expose the listed local names as properties
    for (const localName of localNames) {
        expanded[localName] = `${baseUri}${localName}`;
    }
    return {
        namespace: baseUri,
        ...expanded as ExpandedRecord<TBase, TLocal>,
    };
}

/**
 * Creates a {@link TermVocabulary} based on the provided {@link ValueVocabulary}.
 */
function createTermVocabulary<TBase extends string, TLocal extends string>(values: ValueVocabulary<TBase, TLocal>):
    TermVocabulary<ValueVocabulary<TBase, TLocal>> {
    // Need to cast since `fromEntries` typings aren't strict enough
    return Object.fromEntries(
        Object.entries(values).map(([key, value]): [string, NamedNode] => [key, DataFactory.namedNode(value)]),
    ) as TermVocabulary<ValueVocabulary<TBase, TLocal>>;
}

/**
 * Creates a {@link Vocabulary} with the given `baseUri` as namespace and all `localNames` as entries.
 * The values are the local names expanded from the given base URI as strings.
 * The `terms` field contains all the same values but as {@link NamedNode} instead.
 */
export function createVocabulary<TBase extends string, TLocal extends string>(baseUri: TBase, ...localNames: TLocal[]):
    string extends TLocal ? PartialVocabulary<TBase> : Vocabulary<TBase, TLocal> {
    const values = createValueVocabulary(baseUri, localNames);
    return {
        ...values,
        terms: createTermVocabulary(values),
    };
}

/**
 * Creates a new {@link Vocabulary} that extends an existing one by adding new local names.
 *
 * @param vocabulary - The {@link Vocabulary} to extend.
 * @param newNames - The new local names that need to be added.
 */
export function extendVocabulary<TBase extends string, TLocal extends string, TNew extends string>(
    vocabulary: Vocabulary<TBase, TLocal>,
    ...newNames: TNew[]
):
    ReturnType<typeof createVocabulary<TBase, TLocal | TNew>> {
    const localNames = Object.keys(vocabulary)
        .filter((key): boolean => key !== 'terms' && key !== 'namespace') as TLocal[];
    const allNames = [...localNames, ...newNames];
    return createVocabulary(vocabulary.namespace, ...allNames);
}

export const DCT = createVocabulary(
    'http://purl.org/dc/terms/',
    'description',
    'modified',
    'title',
    'source',
    'created',
    'issued'
  );
export const RDF = createVocabulary(
    'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    'type',
);

export const ODRL = createVocabulary(
    'http://www.w3.org/ns/odrl/2/',
    'Agreement',
    'Offer',
    'Permission',
    'Policy',
    'Request',
    'Set',
    'action',
    'target',
    'assignee',
    'assigner',
    'constraint',
    'operator',
    'permission',
    'dateTime',
    'purpose',
    'uid',
    'leftOperand',
    'rightOperand',
    'gt',
    'gteq',
    'lt',
    'lteq',
    'eq',
    'neq',
    'read'
);

export const SOTW = createVocabulary(
    'http://example.org/',
    'Sotw',
    'includes'
)
export const TEST = createVocabulary(
    'http://example.org/',
    'TestCase',
    'expectedReport',
    'policy',
    'request',
    'sotw'
);

export const REPORT = createVocabulary(
    'https://w3id.org/force/compliance-report#',
    'PolicyReport',
    'RuleReport',
    'PermissionReport',
    'ProhibitionReport',
    'DutyReport',
    'PremiseReport',
    'ConstraintReport',
    'PartyReport',
    'ActionReport',
    'TargetReport',
    'ActivationState',
    'Active',
    'Inactive',
    'AttemptState',
    'Attempted',
    'NotAttempted',
    'PerformanceState',
    'Performed',
    'Unperformed',
    'Unknown',
    'DeonticState',
    'NonSet',
    'Violated',
    'Fulfilled',
    'SatisfactionState',
    'Satisfied',
    'Unsatisfied',
    'policy',
    'policyRequest',
    'ruleReport',
    'premiseReport',
    'rule',
    'ruleRequest',
    'activationState',
    'attemptState',
    'performanceState',
    'deonticState',
    'constraint',
    'satisfactionState',
);

export const XSD = createVocabulary(
    'http://www.w3.org/2001/XMLSchema#',
    'boolean',
    'dateTime'
)
