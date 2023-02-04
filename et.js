function SaveTolocalStorage(event){
    event.preventDefault();
    const ExpenceAmount=event.target.ExpenceAmount.value;
    var Discription=event.target.Discription.value;
    const Category=event.target.Category.value;
    const obj={
        ExpenceAmount,
        Discription,
        Category
    }
    localStorage.setItem(obj.Discription,JSON.stringify(obj));
    showNexExpencesOnScreen(obj);

}
 function showNexExpencesOnScreen(expense){
    
    console.log(localStorage.getItem(expense.Discription));
    if(localStorage.getItem(expense.Discription)!=null){
        removeExpensesFromScreen(expense.Discription);
    }   
     const parentNode=document.getElementById('TotalExpences');
     const ChildNode=`<li id=${expense.Discription}> ${expense.ExpenceAmount}-${expense.Discription}-${expense.Category}
     <button onclick=deleteExpenses('${expense.Discription}')>Delete</button>
     <button onclick=editExpensesDetails('${expense.Discription}','${expense.ExpenceAmount}','${expense.Category}')>Edit</button>
     </li>`
     parentNode.innerHTML=parentNode.innerHTML+ChildNode;

 }
 function deleteExpenses(Discription){
    localStorage.removeItem(Discription);
    removeExpensesFromScreen(Discription);
 }
 function removeExpensesFromScreen(Discription){
    const parentNode=document.getElementById('TotalExpences');
    const childNodetobeDeleted=document.getElementById(Discription);
    if(childNodetobeDeleted){
        parentNode.removeChild(childNodetobeDeleted);
    }
 }
 function editExpensesDetails(Discription,ExpenceAmount,Category){
    document.getElementById('Discription').value=Discription;
    document.getElementById('ExpenceAmount').value=ExpenceAmount;
    document.getElementById('Category').value=Category;
    deleteExpenses(Discription);

 }