// @vitest-environment nuxt
import { it, expect, describe } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import AppNumber from "./AppNumber.vue";

describe("AppNumber", () => {
    it("can mount the component", async () => {
        const component = await mountSuspended(AppNumber);
        expect(component.html()).toContain("Number");
    });
    it("can mount the component", async () => {
        const component = await mountSuspended(AppNumber);
        expect(component.html()).not.toContain("String");
    });
});
