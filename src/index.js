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
  addToImcompleteList(inputText);
};

// 未完了のTODO領域から削除する関数
const deleteFromImcompleteList = (target) => {
  // 削除対象の<li>タグを取得する
  const deleteTarget = target.parentNode.parentNode;

  // 未完了のTODO領域からdeleteTargetを削除する
  document.getElementById("imcomplete-list").removeChild(deleteTarget);
};

// 未完了のTODo領域に追加する
const addToImcompleteList = (text) => {
  // <li>タグ生成
  const li = document.createElement("li");

  // <div>タグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // <p>タグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // 完了ボタンにイベントを設定
  completeButton.addEventListener("click", () => {
    // 未完了のTODO領域からcompleteTargetを削除する
    deleteFromImcompleteList(completeButton);
    // liタグ取得
    const imcompleteTarget = deleteButton.parentNode.parentNode;

    imcompleteTarget.innerText = null;
    const text = deleteButton.parentElement.firstElementChild.innerText;

    // 戻すボタンを生成
    const imcompleteButton = document.createElement("button");
    imcompleteButton.innerText = "戻す";
    imcompleteButton.addEventListener("click", () => {
      // 未完了のTODo領域に追加する
      addToImcompleteList(text);
    });

    // <div>タグ生成
    const div = document.createElement("div");
    div.className = "list-row";

    // <p>タグ生成
    const p = document.createElement("p");
    p.innerText = text;

    div.appendChild(p);
    div.appendChild(imcompleteButton);

    imcompleteTarget.appendChild(div);

    console.log(imcompleteTarget);

    // 完了したTODo領域へcompleteTargetを追加する
    document.getElementById("complete-list").appendChild(imcompleteTarget);
  });

  // 削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタンにイベントを追加
  deleteButton.addEventListener("click", () => {
    // 削除対象の<li>タグを取得する
    deleteFromImcompleteList(deleteButton);
  });

  // <li>タグの中身に子要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("imcomplete-list").appendChild(li);
};

// 追加ボタンのイベントを設定
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => {
  onClickAddChk();
});
