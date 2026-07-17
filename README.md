# P.S.parkle 公式サイト

守口市のボイストレーニングサービス「P.S.parkle」の公式サイトです。

## 技術構成

- Next.js 16 / React 19
- TypeScript
- Static Export（`out/` に静的ファイルを生成）
- 外部データベース・外部CMSなし

## ローカル起動

Node.js 22.13.0以上が必要です。

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認します。

## ビルド

```bash
npm run build
```

静的サイト一式が `out/` に生成されます。一般的な静的ホスティングへアップロードできます。

## 主なページ

- `/` トップページ
- `/price/` 料金・無料体験
- `/child/` 子ども向けボイトレ
- `/teacher/` 講師紹介
- `/access/` 会場・対応時間
- `/faq/` よくある質問
- `/privacy/` プライバシーポリシー

## 外部導線

- 公式LINE: https://lin.ee/YqUsydf
- 予約カレンダー: https://s.lmes.jp/l/1iRda3LfGU

LINE・予約ボタンには `data-cta` と `data-cta-location` を付与し、Google Tag Manager等からクリックを計測できるようにしています。

GA4を使う場合は `.env.example` を参考に `NEXT_PUBLIC_GA_MEASUREMENT_ID` を設定してください。詳しいイベントとLINE追加後の管理方法は `docs/measurement-plan.md` にまとめています。
