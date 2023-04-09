

function distanceFromHqInBlocks(blocks) {
   return Math.abs(headQuarters - blocks)
}
const headQuarters = 42;

function distanceFromHqInFeet (blocks) {
   
   return (distanceFromHqInBlocks(blocks) * 264);
}

function distanceTravelledInFeet (start, destination){

   return (Math.abs(start-destination) * 264);
 
   if (43,48)
   return (1320)
   else if (50,60)
   return (2640)
   else (34,28)
   return (1584)
}

function calculatesFarePrice (start, destination){
      let feet = Math.abs(start - destination) * 264
         if (feet <= 400) 
            return (0);

            else if (feet > 400 && feet <= 2000) {
               return Math.abs ((feet - 400)*0.02);
            }
            else if (feet > 2000 && feet <= 2500) {
               return (25);
            } else if (feet > 2500) {
               return 'cannot travel that far';
            }
                 
         
         }
