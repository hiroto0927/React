import ChatBot from "react-simple-chatbot";
import { useState } from "react";

export default function Test() {
  return (
    <>
      <>
        <ChatBot
          steps={[
            {
              id: "1",
              message:
                "お問い合わせありがとうございます。ご用件を以下から、お選びください。",
              trigger: "2",
            },
            {
              id: "2",
              options: [
                {
                  value: 1,
                  label: "各ツールの使い方を知りたい。",
                  trigger: "4",
                },
                { value: 2, label: "メンバーを知りたい", trigger: "5" },
                {
                  value: 3,
                  label: "どういうことをしているか知りたい。",
                  trigger: "6",
                },
                {
                  value: 4,
                  label: "その他(困り事など)等",
                  trigger: "7",
                },
              ],
            },
            {
              id: "4",
              component: (
                <div>
                  各ツールの紹介をしています。
                  <a href="https://www.microsoft.com/ja-jp/microsoft-365/excel">
                    {"Excel"}
                  </a>
                  <a href="https://www.microsoft.com/ja-jp/microsoft-365/powerpoint">
                    {"PowerPoint"}
                  </a>
                  <a href="https://www.microsoft.com/ja-jp/microsoft-365/word">
                    {"Word"}
                  </a>
                </div>
              ),
              end: true,
            },
            {
              id: "5",
              component: (
                <div>
                  以下のリンク先で紹介しています。
                  <a href="https://www.google.com/">{"リンク"}</a>
                </div>
              ),
              end: true,
            },
            {
              id: "6",
              component: (
                <div>
                  以下のリンク先で紹介しています。
                  <a href="https://www.google.com/">{"リンク"}</a>
                </div>
              ),
              end: true,
            },
            {
              id: "7",
              message: "その他(困り事など)をご記入ください。",
              trigger: "8",
            },
            {
              id: "8",
              user: true,
              trigger: "confirm",
            },
            {
              id: "confirm",
              message: " {previousValue} ",
              trigger: "confirm2",
            },
            {
              id: "confirm2",
              message:
                "上記内容でお間違いないかご確認お願い致します。正しければ「はい」、内容に間違い等あれば「いいえ」をお願い致します。",
              trigger: "10",
            },
            {
              id: "10",
              options: [
                {
                  value: 1,
                  label: " はい ",
                  trigger: "11",
                },
                { value: 2, label: "いいえ。", trigger: "7" },
              ],
            },
            {
              id: "11",
              message:
                "お問い合わせありがとうございます。回答まで暫くお時間をいただきます。",
              end: true,
            },
          ]}
        />
      </>
    </>
  );
}
