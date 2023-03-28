const { deterministicPartitionKey } = require("./dpk")

describe("deterministicPartitionKey", () => {
    it("returns the literal '0' when given no input", () => {
        const trivialKey = deterministicPartitionKey()
        expect(trivialKey).toBe("0")
    })

    it("returns the given partition key when it is provided in the input event", () => {
        const event = { partitionKey: "myKey" }
        const key = deterministicPartitionKey(event)
        expect(key).toBe("myKey")
    })

    it("returns a hash of the input event when no partition key is provided", () => {
        const event = { foo: "bar" }
        const expectedKey =
            "a419a15de4a65c3dba49c38b4485cd4dce1dde4d18f5b965d90f0649bef54252ec4e76dbcaa603708e8e8ebbe848ba484e81e23b7823808b5b8e5f4222d122e8"
        const key = deterministicPartitionKey(event)
        expect(key).toBe(expectedKey)
    })

    it("returns a hash of the stringified input when no partition key is provided and the input is not an object", () => {
        const event = "some string"
        const expectedKey =
            "479cbca322b6f9c4662c42b6d154b2ac69aa94f6eca0d1591b24452ecc7d54073bab53a54b57f82494c7ad584e0e7fba3f8309a6ef8343b129cf993b1f14988a"
        const key = deterministicPartitionKey(event)
        expect(key).toBe(expectedKey)
    })

    it("returns a hash of the original hash when the partition key is too long", () => {
        const longKey = "a".repeat(300)
        const expectedKey =
            "7350d99d1a20435c283070f3613302edb7027fced163086b048bd3ded530c5cb7a8ced83d1c6fda78f8832c61fb02698d14252c6b4ecf6989b81b04ca99a6302"
        const key = deterministicPartitionKey({ partitionKey: longKey })
        expect(key).toBe(expectedKey)
    })
})
