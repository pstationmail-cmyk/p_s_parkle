import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function readExportedPage(path) {
  return readFile(new URL(`out/${path}`, projectRoot), "utf8");
}

test("exports the P.S.parkle homepage with its core conversion content", async () => {
  const html = await readExportedPage("index.html");

  assert.match(html, /<html lang="ja">/);
  assert.match(html, /守口市で、/);
  assert.match(html, /歌声の変化/);
  assert.match(html, /LINEで無料体験を相談/);
  assert.match(html, /86/);
  assert.match(html, /92/);
  assert.match(html, /月1回/);
  assert.match(html, /6,500/);
  assert.match(html, /https:\/\/lin\.ee\/YqUsydf/);
  assert.match(html, /data-cta="line_click"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /HPを見た・無料体験希望/);
});

test("exports the child, price, teacher, access, FAQ, and privacy pages", async () => {
  const pages = [
    ["child/index.html", /小学3年生以上/],
    ["price/index.html", /料金・無料体験/],
    ["teacher/index.html", /谷口 剛気/],
    ["access/index.html", /守口市内全域/],
    ["faq/index.html", /よくある質問/],
    ["guide/index.html", /守口市でボイトレを始める前に知っておきたいこと/],
    ["privacy/index.html", /プライバシーポリシー/],
  ];

  for (const [path, expected] of pages) {
    const html = await readExportedPage(path);
    assert.match(html, expected);
  }
});
