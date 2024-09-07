import { describe, expect, it } from "@jest/globals";
import { greet } from "./greet";

describe("getGreeting", () => {
    it("should return Hello, John!", () => {
        expect(greet("John")).toEqual("Hello, John!");
    });
});
