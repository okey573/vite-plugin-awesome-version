export default function (options = {}) {
  return {
    ...{
      // DEFAULT OPTIONS ...
      defaultAssets: 'assets',
      hash: true
    },
    ...options
  }
}
