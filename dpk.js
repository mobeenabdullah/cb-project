const crypto = require("crypto")

exports.deterministicPartitionKey = (event) => {
    const DEFAULT_PARTITION_KEY = "0"
    const MAX_PARTITION_KEY_LENGTH = 256
    let partitionKey

    if (!event) {
        partitionKey = DEFAULT_PARTITION_KEY
    } else if (event.partitionKey) {
        partitionKey = event.partitionKey
    } else {
        const eventData = JSON.stringify(event)
        partitionKey = crypto
            .createHash("sha3-512")
            .update(eventData)
            .digest("hex")
    }

    if (typeof partitionKey !== "string") {
        partitionKey = JSON.stringify(partitionKey)
    }

    if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
        partitionKey = crypto
            .createHash("sha3-512")
            .update(partitionKey)
            .digest("hex")
    }

    return partitionKey
}
