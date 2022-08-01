import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
                
                <link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                  rel="stylesheet"
                  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                  crossOrigin="anonymous"
                />
                <link rel="stylesheet" type="text/css" href="css/style.css" />
                <link rel="stylesheet" type="text/css" href="css/responsive.css" />

                <link
                  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Darker+Grotesque:wght@300;400&family=Poppins:wght@100;300;400;500;700&display=swap"
                  rel="stylesheet"
                />
              
        </Head>
      <body>
        <Main />
        <NextScript />

  
      </body>
    </Html>
  )
}
