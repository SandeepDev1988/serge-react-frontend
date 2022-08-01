import Link from "next/link";
// import  {useRouter}  from "next/router";
import AllVideos from "../components/Videos/AllVideos";
import { useEffect } from 'react'
import Header from '../components/Layout/Header'

function Videos() {
  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, [])

  const googleTranslateElementInit = () => {

    new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: "en,fr,es", // include this for selected languages
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
      'google_translate_element');

  }
  return (
    <>
      <header className="bgbanner blog_header">
      <Header />
      </header>

      <AllVideos />
    </>
  );
}

export default Videos;
