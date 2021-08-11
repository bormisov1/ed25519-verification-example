const ed25519 = require('ed25519')

function verify(message, signature, signerPubKey) {
    return ed25519.Verify(
        Buffer.from(message),
        Buffer.from(signature, 'hex'),
        Buffer.from(signerPubKey, 'hex'))
}

console.log(verify('98efd52269d325361d8d30a4e38ad5ef0580afe5529b0d8650544896336a324a', '725f8a9008a4def7473136ab1e4581b8ebc4c39f3357595f80d35b618e05eb9813c569af451594387344c0d25427efc4ddeb8fc4121647b978844b46233e210e', '4e486a1a10e367bdabfd95b78483f84cd85d2ddbfb1270fb54c620e31f668d24'))
