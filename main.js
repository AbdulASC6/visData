// person 1
let rand = Math.floor(Math.random() * 1000 + 1);
for(let i = 0; i < rand; i++){
    document.getElementById('name_1').innerHTML = data.results[i].name.first;
    document.getElementById('gen_1').innerHTML = data.results[i].gender;
    document.getElementById('age_1').innerHTML = data.results[i].dob.age;
    document.getElementById('job_1').innerText = job();
    document.getElementById('hob_1').innerText = hobby();
    document.getElementById('loc_1').innerHTML = data.results[i].location.state; 
    document.getElementById('ema_1').innerHTML = data.results[i].email;
    document.getElementById('pho_1').innerHTML = data.results[i].phone;
    const profile1 = document.getElementById('pic_1');
    profile1.setAttribute('src',data.results[i].picture.large)
}



// person 2
let rand_2 = Math.floor(Math.random() * 1000 + 1);
for(let i = 0; i < rand_2; i++){
    document.getElementById('name_2').innerHTML = data.results[i].name.first;
    document.getElementById('gen_2').innerHTML = data.results[i].gender;
    document.getElementById('age_2').innerHTML = data.results[i].dob.age;
    document.getElementById('job_2').innerText = job();
    document.getElementById('hob_2').innerText = hobby();
    document.getElementById('loc_2').innerHTML = data.results[i].location.state;
    document.getElementById('ema_2').innerHTML = data.results[i].email;
    document.getElementById('pho_2').innerHTML = data.results[i].phone;
    const profile2 = document.getElementById('pic_2');
    profile2.setAttribute('src',data.results[i].picture.large);
}

//jobs

function rand_stuff(x){
    let random = Math.floor(Math.random() * x.length);
    return random;
}
function job(){
    let occupation = ["Designer","Footballer","Firefighter","Art critic","Dental hygienist","Factory worker","Career criminal","Pilot","Landowner","Barber","Leaflet distributor","Sports coach","Tax Fraudist"];
    let idx = rand_stuff(occupation);
    jobs = occupation[idx];
    return jobs;
}
function hobby(){
    let fun = ["Hunting","Antiquing","Shoe Collecting",'Cooking','Baking','Painting','Drawing','Video Games','Reading Manga', 'Watching Anime'];
    let idx = rand_stuff(fun);
    hobbies = fun[idx];
    return hobbies;
}