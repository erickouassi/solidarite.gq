/* ======================================================================
  www.erickouassi.com
====================================================================== */
//
async function getUsers() {
    let url = 'https://opensheet.vercel.app/1bPSlQGENmSJNMpJbDpq-lrcvgY0Ah5_Cu9zTmmtmCZg/Data+2021';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await getUsers();
    // console.log(users)
    const user = users;
    //console.log(user)
  //
  	var user_id = document.getElementById('username').value

	for(var i = 0; i < user.length; i++) {
		// check is user input matches user_id of a current index of the user array
		if(user_id == user[i].user_id ) { 
			//console.log(user_id + " is logged in!!!")
     // alert("Successfully login!");
      document.getElementById("errors").style.display = "none";
      document.getElementById("formDisplay").style.display = "none";
//
    const result = user.find( ({ user_id }) => user_id === user[i].user_id );
     // console.log(result)
    let html = '';
   
        let htmlSegment = `<div class="user">
        <div class="container">
        <img src="${result.profileURL}" >
        <span><h2>${result.name}</h2>
        <p> Identifiant: ${result.user_id}</p></span>
        </div>
        <strong>Année 2021</strong>
        <p>Total: <strong>${result.total}</strong> Fcfa</p>
        
        <caption>Récapitulatif des montants mensuels en FCFA)</caption>
        <div class="cards_m">
        <div class="card_m">
            <p>Janvier: ${result.jan}</p>
            <p>Février: ${result.feb}</p>
            <p>Mars: ${result.mar}</p></div>
        <div class="card_m">
          <p>Avril: ${result.apr}</p>
          <p>Mai: ${result.may}</p>
          <p>Juin: ${result.jun}</p></div>
        <div class="card_m">
          <p>Juillet: ${result.jul}</p>
          <p>Août: ${result.aug}</p>
          <p>Septembre: ${result.sep}</p></div>
        <div class="card_m">
            <p>Octobre: ${result.oct}</p>
            <p>Novembre: ${result.nov}</p>
            <p>Décembre: ${result.dec}</p></div>
        </div>
        <br>
        <caption>Récapitulatif des montants exceptionnels en FCFA</caption>
        <div class="cards_e">
        <div class="card_e">
            <p>Exceptionnel 1: ${result.ex1}</p>
            <p>Exceptionnel 2: ${result.ex2}</p></div>
        <div class="card_e">
          <p>Exceptionnel 3: ${result.ex3}</p>
          <p>Exceptionnel 4: ${result.ex4}</p></div>
        <div class="card_e">
            <p>Exceptionnel 5: ${result.ex5}</p>
            <p>Exceptionnel 6: ${result.ex6}</p></div>
        </div>   

</div>`;

        html += htmlSegment;

    let container = document.querySelector('.container');
    container.innerHTML = html;
			// stop the function if this is found to be true
			return
		}
	}
  let msgErrors = document.querySelector('#errors');
  msgErrors.innerHTML = "<span style='color:red'>Cet identifiant n'est pas valide</span>";
	//console.log("incorrect username or password")
}
  renderUsers();
