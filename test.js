function pause(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function afficherDate() 
{
  while(true) 
  {
    await pause(1000);
    var cejour = new Date();
    console.log("heure : "+cejour.getHours()+"\nminutes : "+cejour.getMinutes());
    if (cejour.getHours()==15){
        console.log("yeah")
    }
  }
}
afficherDate();