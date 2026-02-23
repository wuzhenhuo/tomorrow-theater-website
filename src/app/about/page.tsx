import Image from 'next/image';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "吴振",
      role: "創意總監",
      description: "澳门科技大学数字媒体博士，国家二级舞台美术，澳门国际青年智库理事、研究员。",
      image: "/team/wuzhen.png"
    },
    {
      name: "歐陽嘉玲（澳門）",
      role: "項目策劃",
      description: "澳门国际青年智库秘书长",
      image: "/team/jialing.png"
    },
    {
      name: "樊一鳴（澳大利亞）",
      role: "市場總監",
      description: "视觉艺术家，澳门大学硕士",
      image: "/team/fanyiming.png"
    },
    {
      name: "王瑩",
      role: "設計總監",
      description: "北京师范大学（珠海）硕士",
      image: "/team/wangyin.png"
    }
  ];

  const artAdvisors = [
    {
      name: "Tony Brown",
      role: "法国巴黎国立高等美院终身教授",
      image: "/team/tony.png"
    },
    {
      name: "高鹏",
      role: "北京师范大学未来设计学院院长",
      image: "/team/gaopeng.png"
    }
  ];

  const aiEmployees = [
    {
      name: "Bernard",
      role: "首席程序員",
      image: "/team/bernard.png"
    },
    {
      name: "Claw",
      role: "首席經理",
      image: "/team/claw.png"
    }
  ];

  const partners = [
    "澳门科技大学", "澳门国际青年智库", "澳门舞蹈家协会", "北京师范大学未来设计学院（珠海）",
    "天津傳媒學院",
    "索尼 (SONY)", "理光 (RICOH)", "HTC", "微软中国",
    "亚马逊云 (AWS)", "华为 (HUAWEI)",
    "北京澜景科技有限公司enlightv",
    "北京诺亦腾科技有限公司 (Noitom)",
    "上海青瞳科技有限公司 (Chingmu Technology)",
    "Ltd. Bite Dance-PICO"
  ];

  const awards = [
    "2025AI元宇宙1000优秀产品目录与示范案例（四星级），2025中国元宇宙星级供应商（四星级）",
    "2025廣州科技創新創業大賽港澳台賽暨香港科技大學百萬獎金創業大賽廣州賽優勝獎，應邀入駐香港科技大學（廣州）霍英東研究院創新工場",
    "2024中国教育学会《沉浸交互式技术支持下的艺术融合教学模式的构建》課題",
    "2024前海粤港澳台青年创新创业大赛推送獎",
    "2024澳門科技周 (參展)",
    "2024上海進博會 (參展)",
    "2024入圍江門科創大賽",
    "2023中國國際大學生雙創賽銀獎",
    "2023理創大賽銀獎（索尼/理光）",
    "2023入選Unity黑馬計劃",
    "2022TCDIG全球數字科技創意設計大賽銀獎"
  ];

  const coreValues = [
    "保持開放 (Keep an open mind)",
    "勇往直前 (Move forward bravely)",
    "充滿激情 (Full of passion)",
    "擁抱科技與藝術 (Embracing technology and art)",
    "創建未來 (To build and create)"
  ];

  return (
    <div className="space-y-16 my-12">
      <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-800">關於我們 - 未來視野科技有限公司</h1>
        
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">項目介紹</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            大灣區「明日劇場」智慧展演平台項目立足灣區，將元宇宙、人工智能技術與大灣區本土相結合。創作虛擬現實沈浸式劇場，為戲劇、舞蹈、雜技等表演藝術提供虛擬版本的編創和表演平台，同時兼具博物館和教學功能。已形成由「動作數據庫」，「AI數字人」，「數字雲劇場」構成的三位一體、可持續發展的元宇宙展演生態體系。已開發配套人工智能通識教程應用於中小學AI數智化教育，项目使用ML视觉处理框架，AIGC生成式大模型，以及RAG等技术。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            項目入選2023年Unity黑馬計劃，獲2022全球數字科技創意大賽銀獎，2023理創大賽大灣區二等獎。應用場景包括：AI+文旅、教育、藝術。項目現已落地澳門青創中心，北師大未來設計美術館（珠海），798深瀾AI中心（北京），應邀參加2024、2025澳门科技周，第七届上海進博會。项目入选2024全国元宇宙优秀产品示范案例与星级供应商。
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">項目亮點</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1. 超越時空的限制</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-3">
                平台打破了地理位置的束縛，使身處異地的藝術家能夠在虛擬空間中，借助個性化的虛擬化身共同完成舞台劇目的創作與教學。所有創作成果都能以數字資產的形式被永久保存，方便後續的查閱、修改和再利用。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                觀眾同樣受益於此，即使在家中，也能通過平板電腦、VR頭顯等數字設備觀看演出，甚至可以「走進劇場」，以第一人稱視角參與到演出互動中。這極大地便利了藝術家進行跨區域乃至國際間的合作與交流。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2. 虛擬博物館與公共社交空間</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                「明日劇場」不僅是表演的場所，它同時也是一個充滿活力的虛擬博物館和公共社交空間。觀眾可以在這個虛擬世界中定制自己獨特的虛擬化身，與其他藝術愛好者交流心得，分享和探討藝術作品，形成一個富有創造力的線上社群。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3. 異地表演和創作教學</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                在虛擬空間中，學生可以通過交互設備（如VR手柄、體感服等）跟隨老師的指導，學習表演技巧和創作方法。平台可以提供多樣化的虛擬劇場舞台環境，例如充滿未來感的賽博朋克（Cyberpunk）風格超現實表演空間，或是古色古香的園林風格戲台，甚至是漂浮在海上的露天劇場。
                通過精心設計的交互體驗，學習者能夠獲得身臨其境般的感官刺激，極大地增強學習的趣味性和有效性。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">4. 數據保存和轉化</h3>
              {/* Add content for data saving and transformation if provided */}
               <p className="text-lg text-gray-700 leading-relaxed">
                平台支持將表演數據、創作過程和成果進行數字化保存，並可轉化為多種格式，便於學術研究、二次創作和跨平台共享。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">主創團隊</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden relative bg-gray-200">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-1">{member.name}</h3>
              <p className="text-indigo-500 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">AI 員工</h2>
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 max-w-3xl mx-auto">
          {aiEmployees.map((employee, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden relative bg-gray-200">
                <Image 
                  src={employee.image} 
                  alt={employee.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-1">{employee.name}</h3>
              <p className="text-indigo-500 font-medium">{employee.role}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">公司核心價值觀</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <ul className="space-y-3">
            {coreValues.map((value, index) => (
              <li key={index} className="text-lg text-gray-700 flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-100 py-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">藝術指導</h2>
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 max-w-3xl mx-auto">
          {artAdvisors.map((advisor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden relative bg-gray-200">
                <Image 
                  src={advisor.image} 
                  alt={advisor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-1">{advisor.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{advisor.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">技術支持及合作夥伴</h2>
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4 text-center">
            {partners.map((partner, index) => (
              <div key={index} className="p-3">
                <p className="text-gray-700 font-medium text-sm md:text-base">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">所獲獎項與榮譽</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <ul className="space-y-3">
            {awards.map((award, index) => (
              <li key={index} className="text-lg text-gray-700 flex items-center">
                <svg className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                {award}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

