import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script type="module" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule="" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"></script>
        </Head>
        <body className="bg-app-navy font-sans leading-normal tracking-normal">
          <Main />
          <NextScript />

          {/* <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument