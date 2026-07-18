/**
 * Curated portfolio — fewer projects, stronger presentation.
 * Each item includes a local introductory preview image + link.
 */
var PORTFOLIO_PROJECTS = {
  japanese: [
    {
      name: "Japanese Medical Consultation",
      url: "https://japanese-medical-consultation.vercel.app/",
      image: "assets/previews/medical.jpg",
      category: "AI × Medical",
      summary: "医療相談向け対話型Webアプリ。LLMを活用し、症状ヒアリングから相談体験までを一気通貫で設計・実装。",
      impact: "生成AI × ヘルスケアUXの実証プロダクト",
      tech: "Next.js / LLM API / Vercel"
    },
    {
      name: "Shopping Assistant",
      url: "https://shopping-assistant-ten.shop",
      image: "assets/previews/shopping.jpg",
      category: "AI × EC",
      summary: "EC向けショッピングアシスタント。商品探索と対話UXを組み合わせ、購買導線を最適化。",
      impact: "会話型コマースによる購買体験の再設計",
      tech: "AI Chat / Next.js / Vector Search"
    },
    {
      name: "uka",
      url: "https://uka.co.jp/",
      image: "assets/previews/uka.jpg",
      category: "Beauty / Brand",
      summary: "ヘアケアブランド公式サイト。ブランド世界観を保ちつつ、商品発見と購買導線を整理したEC体験。",
      impact: "美容ブランドのデジタル接客基盤",
      tech: "Brand Web / EC UX"
    },
    {
      name: "TORAYA",
      url: "https://toraya-group.co.jp/",
      image: "assets/previews/toraya.jpg",
      category: "Food / Heritage Brand",
      summary: "老舗和菓子ブランドのコーポレートサイト。歴史と現代性を両立する情報設計・ビジュアル表現。",
      impact: "伝統ブランドのデジタル再編集",
      tech: "Corporate / Content Design"
    },
    {
      name: "Hotel The Mitsui",
      url: "https://hotel-the-mitsui.com/",
      image: "assets/previews/mitsui.jpg",
      category: "Hospitality",
      summary: "ラグジュアリーホテルの公式サイト。宿泊体験の価値を伝えるビジュアル主導の情報設計。",
      impact: "高単価宿泊のブランド体験設計",
      tech: "Hotel Web / Booking UX"
    },
    {
      name: "teamLab",
      url: "https://teamlab.art/",
      image: "assets/previews/teamlab.jpg",
      category: "Art / Experience",
      summary: "デジタルアート集団のグローバルサイト。作品・展覧会・体験価値を横断的に見せる構成。",
      impact: "体験型アートの世界発信ハブ",
      tech: "Media / Immersive Web"
    },
    {
      name: "STUDIO",
      url: "https://studio.design/ja",
      image: "assets/previews/studio.jpg",
      category: "SaaS / Design Tool",
      summary: "ノーコードWebデザインツールの公式サイト。プロダクト価値とクリエイティブ表現を両立。",
      impact: "SaaSプロダクトのブランドコミュニケーション",
      tech: "SaaS Marketing Site"
    },
    {
      name: "KARTE",
      url: "https://karte.io/",
      image: "assets/previews/karte.jpg",
      category: "SaaS / CX",
      summary: "顧客体験プラットフォームのプロダクトサイト。B2B SaaSとしての機能価値と導入メリットを明確化。",
      impact: "エンタープライズCX基盤の訴求",
      tech: "B2B SaaS / Product Site"
    },
    {
      name: "SmartHR",
      url: "https://smarthr.co.jp/",
      image: "assets/previews/smarthr.jpg",
      category: "HR Tech",
      summary: "クラウド人事労務ソフトのコーポレート／プロダクトサイト。業務課題から導入価値への導線設計。",
      impact: "HR SaaSの信頼形成とリード獲得",
      tech: "SaaS / Corporate"
    },
    {
      name: "Money Forward",
      url: "https://moneyforward.com/",
      image: "assets/previews/moneyforward.jpg",
      category: "FinTech",
      summary: "家計・会計DXプラットフォーム。個人／法人双方へのサービス導線を整理した大規模サイト。",
      impact: "FinTechサービスのマルチセグメント訴求",
      tech: "FinTech / Platform Web"
    },
    {
      name: "AURALEE",
      url: "https://auralee.jp/",
      image: "assets/previews/auralee.jpg",
      category: "Fashion",
      summary: "アパレルブランド公式。余白とタイポグラフィを活かした、プロダクト中心のブランドサイト。",
      impact: "ファッションブランドの世界観表現",
      tech: "Fashion EC / Brand"
    },
    {
      name: "BYAKU / 瀬戸内",
      url: "https://setouchi.byaku.site/",
      image: "assets/previews/byaku.jpg",
      category: "Travel / Ryokan",
      summary: "瀬戸内の宿泊体験サイト。土地の空気感を伝えるビジュアルと、滞在価値のストーリー設計。",
      impact: "地域宿泊ブランドの体験訴求",
      tech: "Tourism / Hospitality Web"
    }
  ],

  bySkill: [
    {
      id: "ai",
      skill: "AI / Agent / RAG",
      note: "実務5年以上 — OpenAI / Claude / LangChain / Dify / 業務プロセスのAIワークフロー化",
      items: [
        {
          name: "Japanese Medical Consultation",
          url: "https://japanese-medical-consultation.vercel.app/",
          image: "assets/previews/medical.jpg",
          summary: "医療相談×LLMの対話プロダクト。相談フローを構造化し、生成AIで支援。",
          impact: "ヘルスケア領域のAI UX実証",
          tech: "Next.js / LLM / RAG"
        },
        {
          name: "Shopping Assistant",
          url: "https://shopping-assistant-ten.shop",
          image: "assets/previews/shopping.jpg",
          summary: "EC向け会話型アシスタント。商品探索とレコメンドを一体化。",
          impact: "CVR向上を狙った会話型コマース",
          tech: "Claude API / Vector Search / Next.js"
        },
        {
          name: "Kindred Learn",
          url: "https://kindred-learn-4489f4f9.base44.app/home",
          image: "assets/previews/kindred.jpg",
          summary: "成人教育向けラーニング体験。学習導線とコンテンツ発見を最適化。",
          impact: "EdTech × AIの学習体験",
          tech: "AI Web App"
        },
        {
          name: "AI業務自動化エージェント",
          url: null,
          image: "assets/portrait-about.jpg",
          summary: "Dify + OpenAI + FastAPIによる社内問い合わせ自動化基盤。RAGでナレッジ検索を強化。",
          impact: "問い合わせ工数 約60%削減",
          tech: "Dify / OpenAI / FastAPI / AWS ECS / pgvector"
        }
      ]
    },
    {
      id: "backend",
      skill: "Backend / Cloud / FinTech",
      note: "実務6年以上 — 高負荷トランザクション・冪等設計・AWS可用性設計",
      items: [
        {
          name: "E-Wallet決済基盤",
          url: null,
          image: "assets/portrait-alt.jpg",
          summary: "東南アジア向けE-Wallet基幹。Ledger設計で残高整合性を担保し、ピーク数千TPSに対応。",
          impact: "API応答 約35%改善 / 二重決済リスク抑制",
          tech: "Java / Spring Boot / Redis / Kafka / AWS"
        },
        {
          name: "政府向けデジタル行政PF",
          url: null,
          image: "assets/portrait-primary.jpg",
          summary: "行政申請のデジタル化基盤。Multi-AZ構成で可用性を担保。",
          impact: "稼働率 99.9% SLA達成",
          tech: "FastAPI / ECS / PostgreSQL / CloudWatch"
        },
        {
          name: "看護シフト最適化AI",
          url: null,
          image: "assets/portrait-about.jpg",
          summary: "CSPベースのシフト最適化。厳密解と計算コストのバランスをヒューリスティックで解決。",
          impact: "シフト作成工数 最大70%削減 / 満足度88%",
          tech: "Python / FastAPI / React Native / PostgreSQL"
        },
        {
          name: "日本企業オフショア開発（CMC）",
          url: null,
          image: "assets/portrait-alt.jpg",
          summary: "要件→API設計への変換、OpenAPI標準化、QAプロセス設計でブリッジ開発を統括。",
          impact: "QA指摘率 30–40%改善",
          tech: "Spring Boot / FastAPI / OpenAPI / AWS"
        }
      ]
    },
    {
      id: "react",
      skill: "React",
      note: "大規模サービス〜ブランドサイトまで、フロントエンド実装実績",
      items: [
        {
          name: "Shopee Malaysia",
          url: "https://shopee.com.my/",
          image: "assets/previews/shopee.jpg",
          summary: "東南アジア最大級ECのフロント体験。高トラフィック前提のUI実装。",
          impact: "大規模ECフロント",
          tech: "React / Performance UX"
        },
        {
          name: "GrabFood Singapore",
          url: "https://food.grab.com/sg/en/",
          image: "assets/previews/grab.jpg",
          summary: "フードデリバリー注文体験。モバイルファーストの導線設計。",
          impact: "オンデマンド注文UX",
          tech: "React / Mobile Web"
        },
        {
          name: "Vita Health",
          url: "https://www.vitahealth.net.au/",
          image: "assets/previews/vita.jpg",
          summary: "ヘルスケア領域のサービスサイト。信頼感のある情報設計とUI。",
          impact: "ヘルスケアWeb",
          tech: "React"
        },
        {
          name: "AIMRO",
          url: "https://www.aimro.ie/",
          image: "assets/previews/aimro.jpg",
          summary: "組織・団体向けコーポレートWeb。コンテンツ構造とアクセシビリティを重視。",
          impact: "コーポレートReactサイト",
          tech: "React"
        }
      ]
    },
    {
      id: "laravel",
      skill: "Laravel / PHP",
      items: [
        {
          name: "Coach.io",
          url: "https://coach.io/",
          image: "assets/previews/coach.jpg",
          summary: "コーチング／学習支援系プラットフォーム。認証・コンテンツ管理を含むWebアプリ。",
          impact: "SaaS型学習支援",
          tech: "Laravel / Vue"
        },
        {
          name: "InboxTrack",
          url: "https://inboxtrack.io/home",
          image: "assets/previews/inboxtrack.jpg",
          summary: "メール到達・トラッキング系ツールのプロダクトサイト／アプリ導線。",
          impact: "B2BツールUI",
          tech: "Laravel"
        },
        {
          name: "Savills",
          url: "https://www.savills.co.uk/",
          image: "assets/previews/savills.jpg",
          summary: "グローバル不動産ブランドの大規模コンテンツサイト。",
          impact: "Enterprise Web",
          tech: "CMS / Web"
        }
      ]
    },
    {
      id: "mobile",
      skill: "Mobile App",
      note: "iOS / Android — Firebase連携、課金、リアルタイム体験",
      items: [
        {
          name: "Gym Crush",
          url: "https://apps.apple.com/pk/app/gym-crush-app/id6471010947",
          image: "assets/previews/gymcrush.jpg",
          summary: "フィットネス系モバイルアプリ。アプリ内課金とスムーズなアニメーションを実装。",
          impact: "IAP / Animation UX",
          tech: "iOS / In-App Purchase"
        },
        {
          name: "AquaPro",
          url: "https://apps.apple.com/us/app/aquapro/id1615343095",
          image: "assets/previews/aquapro.jpg",
          summary: "Firebase連携によるリアルタイムユーザー体験を持つモバイルアプリ。",
          impact: "Realtime / Firebase",
          tech: "iOS / Firebase"
        },
        {
          name: "ParkWhiz",
          url: "https://www.parkwhiz.com/",
          image: "assets/previews/parkwhiz.jpg",
          summary: "駐車場予約サービスのWeb/アプリ連携体験。位置情報と予約フローを統合。",
          impact: "Mobility Booking",
          tech: "Mobile Web / App"
        }
      ]
    },
    {
      id: "wordpress",
      skill: "WordPress",
      items: [
        {
          name: "Savills",
          url: "https://www.savills.co.uk/",
          image: "assets/previews/savills.jpg",
          summary: "グローバル不動産ブランドの大規模コンテンツサイト。",
          impact: "Enterprise WordPress",
          tech: "WordPress / CMS"
        },
        {
          name: "HousingAnywhere",
          url: "https://housinganywhere.com/",
          image: "assets/previews/housing.jpg",
          summary: "国際賃貸プラットフォーム。検索・一覧・詳細の体験設計。",
          impact: "Marketplace UX",
          tech: "WordPress / Web"
        },
        {
          name: "AIMRO",
          url: "https://www.aimro.ie/",
          image: "assets/previews/aimro.jpg",
          summary: "組織向けコーポレートサイト。情報設計と読みやすさを重視。",
          impact: "Corporate CMS",
          tech: "WordPress"
        }
      ]
    },
    {
      id: "threejs",
      skill: "Three.js / Creative",
      items: [
        {
          name: "Bruno Simon",
          url: "https://bruno-simon.com/",
          image: "assets/previews/bruno.jpg",
          summary: "WebGLポートフォリオのリファレンス級実装。インタラクションと3D表現。",
          impact: "Creative WebGL",
          tech: "Three.js"
        },
        {
          name: "Kode Clubs",
          url: "https://www.kodeclubs.com/",
          image: "assets/previews/kode.jpg",
          summary: "3D表現を取り入れた体験型Web。ブランド世界観の没入感を強化。",
          impact: "Immersive Brand",
          tech: "Three.js"
        }
      ]
    },
    {
      id: "japan",
      skill: "Japanese Brand / SaaS",
      note: "日本企業向けブランド・SaaS・ホスピタリティ案件の代表例",
      items: [
        {
          name: "uka",
          url: "https://uka.co.jp/",
          image: "assets/previews/uka.jpg",
          summary: "美容ブランド公式。世界観と購買導線を両立。",
          impact: "Beauty Brand EC",
          tech: "Brand Web"
        },
        {
          name: "STUDIO",
          url: "https://studio.design/ja",
          image: "assets/previews/studio.jpg",
          summary: "デザインSaaSのプロダクトコミュニケーション。",
          impact: "SaaS Branding",
          tech: "Product Site"
        },
        {
          name: "teamLab",
          url: "https://teamlab.art/",
          image: "assets/previews/teamlab.jpg",
          summary: "体験型アートのグローバル発信サイト。",
          impact: "Art Experience Hub",
          tech: "Media Site"
        },
        {
          name: "Hotel The Mitsui",
          url: "https://hotel-the-mitsui.com/",
          image: "assets/previews/mitsui.jpg",
          summary: "ラグジュアリーホテルの宿泊体験訴求。",
          impact: "Luxury Hospitality",
          tech: "Hotel Web"
        }
      ]
    }
  ]
};
