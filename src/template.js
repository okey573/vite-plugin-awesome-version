export default function (options) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vite-plugin-awesome-version</title>
    <script>
      var url = 'someAPI' + '${options.name}'
      var page = document.open('text/html', 'replace')
      var xhr = new XMLHttpRequest()
      xhr.open('get', url)
      xhr.send()
      xhr.onload = function () {
        // 这里的 xhr.response 就是真实的 html 内容 具体要看接口怎么实现
        page.write(xhr.response)
        page.close()
      }
    </script>
</head>
<body>
</body>
</html>
`
}
