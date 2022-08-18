import {describe, expect, it} from '@jest/globals'
import { ValidPassword } from '.'

describe("Test unitário para validadores", () => {
    it("should validate null password field", () => {
        expect(ValidPassword(null)).toBeFalsy()
    })
    it("should validate password field with invalid length", () => {
        expect(ValidPassword("12345")).toBeFalsy()
    })
    it("should validate password field with valid length", () => {
        expect(ValidPassword("123456")).toBeTruthy()
    })
    it("should validate password field with valid length", () => {
        expect(ValidPassword("123456789")).toBeTruthy()
    })
    it("should validate password field with no numbers", () => {
        expect(ValidPassword("$%fTRHYgg")).toBeFalsy()
    })
    it("should validate password field with numbers", () => {
        expect(ValidPassword("$%fTRH9Ygg")).toBeTruthy()
    })
})