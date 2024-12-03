import {TestCase} from "../Interfaces";
import * as path from "path";
import * as fs from "fs";
import {testCaseDocumentation} from "../test_cases/TestCaseUtil";


export function storeTestCase(testCase: TestCase, directory: string): void {
    const markdown = testCaseDocumentation(testCase)
    const fileName = path.parse(testCase.expectedReport.source).base.split(".")[0] + ".md"
    const filePath = path.join(directory, fileName);
    fs.writeFileSync(filePath, markdown);
}
