document.addEventListener("DOMContentLoaded", () => {

  const gp = document.querySelector(".grandparent");
  const box = document.querySelector(".box");
  const p = document.querySelector(".parent");
  const child = document.querySelector(".child");
  const list = document.querySelector(".list");
  const clear = document.querySelector(".clear");

  gp.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "grandparent - bubbling";
    list.appendChild(li);
    clear.style.display="block";
  });

  gp.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "grandparent - capturing";
    list.appendChild(li);
    clear.style.display="block";
  }, true);

  p.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "parent - bubbling";
    list.appendChild(li);
    clear.style.display="block";
  });

  p.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "parent - capturing";
    list.appendChild(li);
    clear.style.display="block";
  }, true);

  child.addEventListener("click", (e) => {
    e.stopPropagation();
    const li = document.createElement("li");
    li.textContent = "child - Handler 1 - stopPropagation;";
    list.appendChild(li);
    clear.style.display="block";
  });

  child.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "child - Handler 2 - (stop)";
    list.appendChild(li);
    clear.style.display="block";
  });

  child.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "child - Handler 3 - (stop)";
    list.appendChild(li);
    clear.style.display="block";
  });
  clear.addEventListener("click",()=>{
    list.textContent="";
    clear.style.display="none";
  })

});