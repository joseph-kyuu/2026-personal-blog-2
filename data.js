// 文章資料

const articleData = [
  {
    img: "./img/blog_1.png",
    label: ["UIUX 設計", "網頁設計", "前端技術"],
    title:
      "網頁裡的微互動藝術：利用 CSS 與 JS 動畫為諮詢網站注入靈魂並提升用戶轉化率",
    alt: "網頁裡的微互動藝術",
    time: "Oct 16, 2022",
    views: "110 views",
    shares: "2 shares",
  },
  {
    img: "./img/blog_2.png",
    label: ["UIUX 設計", "設計規範", "前端技術"],
    title:
      "10年職人手記：如何運用 Figma 與 Storybook 打造美感與邏輯兼具的企業級設計系統",
    alt: "網頁裡的微互動藝術",
    time: "Oct 16, 2022",
    views: "110 views",
    shares: "2 shares",
  },
  {
    img: "./img/blog_3.png",
    label: ["品牌設計", "平面設計", "UIUX 設計"],
    title:
      "從平面識別到數位體驗：以「植感生活」為例，探討跨媒體品牌視覺在網頁上的精準轉譯",
    alt: "從平面識別到數位體驗",
    time: "Oct 16, 2022",
    views: "110 views",
    shares: "2 shares",
  },
  {
    img: "./img/blog_4.png",
    label: ["UIUX 設計", "前端技術", "AI 趨勢應用"],
    title:
      "當 AI 遇上介面設計：資深設計師如何利用生成式工具重塑前端開發工作流與視覺想像力",
    alt: "當 AI 遇上介面設計",
    time: "Oct 16, 2022",
    views: "110 views",
    shares: "2 shares",
  },
  {
    img: "./img/blog_5.png",
    label: ["前端技術", "後端架構", "AI 趨勢應用"],
    title:
      "揭開金融 App 的設計密碼：如何優化 Open Bank API 的複雜數據呈現與後端串接安全性",
    alt: "揭開金融 App 的設計密碼",
    time: "Oct 16, 2022",
    views: "110 views",
    shares: "2 shares",
  },
];

// 部落格文章迴圈

const courseCard = document.querySelector(".blogArticle");

let blogArticleHTML = "";

articleData.forEach((item) => {
  blogArticleHTML += `
            <li class="mb-4 ">
            <a class="d-flex" href="#">
              <div class="me-4">
                <img src="${item.img}" alt="${item.alt}" title="${item.alt}">
              </div>
              <div class="d-flex flex-column justify-content-center">
                <div class="mb-12">
                   <h3 class="text-neutral-700  fs-6 lh-150 mb-0">${item.label[0]}
                    <span class="px-2">·</span>
                   ${item.label[1]}
                     <span class="px-2">·</span>
                   ${item.label[2]}
                   </h3>
                </div>
                <div class="mb-12">
                  <h2 class="fs-4 text-neutral-700 lh-150 mb-0 fw-bold">${item.title}</h2>
                </div>
                <div class="d-flex justify-content-between">
                  <time class="text-neutral-700 fs-14 ">${item.time}</time>
                  <div class="d-flex">
                    <div class="me-12">
                      <img class="me-1" src="./img/visibility.svg" alt="觀看符號" title="觀看符號">
                      <span class="text-neutral-700 fs-14">${item.views}</span>
                    </div>
                    <div>
                      <img class="me-1" src="./img/share.svg" alt="分享符號" title="分享符號">
                      <span class="text-neutral-700 fs-14">${item.shares}</span>
                    </div>
                  </div>
                </div>
              </div>
              </a>
            </li>    
  `;
});

courseCard.innerHTML = blogArticleHTML;
