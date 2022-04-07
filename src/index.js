import "./styles.css";

const onClickAddChk = () => {
  const inputText = document.getElementById("add-text").value;
  console.log(inputText);
  if (inputText.trim() === "") {
    document.getElementById("add-text").className = "error-text";
    alert("入力してください");
  } else {
    document.getElementById("add-text").className = "";
    onClickAdd(inputText);
  }
};

const onClickAdd = (inputText) => {
  document.getElementById("add-text").value = "";

  // <li>タグ生成
  const li = document.createElement("li");

  // <div>タグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // <p>タグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // <li>タグの中身に子要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("imcomplete-list").appendChild(li);

  console.log(inputText);
  console.log(li);
};

// 追加ボタンのイベントを設定
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAddChk());
