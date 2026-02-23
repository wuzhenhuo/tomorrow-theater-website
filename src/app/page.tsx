import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const coreConcepts = [
    {
      title: "虛擬現實沉浸式劇場",
      description: "運用動作捕捉、遊戲引擎及AI技術，構建超越時空的虛擬劇場，為戲劇、舞蹈、非遺文化等提供全新的編創、表演與教學平台。"
    },
    {
      title: "四大核心功能",
      description: "支持線上異地協同聯排、元宇宙直播觀看、XR展演（真人與虛擬場景/數字人結合）以及AI輔助創作與教學。"
    },
    {
      title: "服務澳門文旅與數字教育",
      description: "致力於呈現前沿跨界藝術，傳播中華優秀傳統文化，提供高質量沉浸式交互體驗，推動澳門文旅產業發展與線上數字教育創新。"
    }
  ];

  const latestNews = [
    {
      title: "北師大「未來設計種子基金」項目｜明日劇場：未來展演平台",
      date: "2022年2月",
      source: "北師大未來設計學院",
      url: "https://mp.weixin.qq.com/s/wQxRuQ6TDugZAWyoT9R_eQ"
    },
    {
      title: "Wizard of technology casts his spell",
      date: "2022年3月",
      source: "中國日報",
      url: "https://enapp.chinadaily.com.cn/a/202203/16/AP623196b8a3104446d8d134e7.html"
    },
    {
      title: "「明日劇場」：面向未來的沈浸式展演平台",
      date: "2022年9月",
      source: "ＭＯＣＡ藝術",
      url: "https://mp.weixin.qq.com/s/YBabTNniIeFdkUygs1Ju-A"
    }
  ];

  return (
    <div className="space-y-12 mb-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-900 text-white rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold mb-6">明日劇場：開啟未來展演新紀元</h1>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          結合運動捕捉、遊戲引擎與AI人工智能，我們為藝術、教育與文旅打造沉浸式虛擬現實體驗。
        </p>
        <div className="space-x-4">
          <Link href="/about" legacyBehavior>
            <a className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md transition-colors">
              了解更多
            </a>
          </Link>
          <Link href="/media" legacyBehavior>
            <a className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md transition-colors">
              媒體報導
            </a>
          </Link>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-review" className="py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">精彩回顧</h2>
        <div className="aspect-video max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl">
          <iframe 
            src="//player.bilibili.com/player.html?bvid=BV1wjEvzNEjP&t=40.440464&autoplay=0" 
            scrolling="no" 
            frameBorder="0" 
            allowFullScreen={true}
            className="w-full h-full"
          >
          </iframe>
        </div>
      </section>

      {/* Core Concepts and Services Section */}
      <section id="core-concepts" className="py-12 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">核心理念與服務</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8">
          {coreConcepts.map((concept, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">{concept.title}</h3>
              <p className="text-gray-700 leading-relaxed">{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section id="latest-news" className="py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">最新動態</h2>
        <div className="space-y-8 max-w-4xl mx-auto px-4">
          {latestNews.map((newsItem, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{newsItem.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{newsItem.date} - {newsItem.source}</p>
              <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                閱讀原文 →
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/media" legacyBehavior>
            <a className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md transition-colors">
              查看所有報導
            </a>
          </Link>
        </div>
      </section>

    </div>
  );
}

