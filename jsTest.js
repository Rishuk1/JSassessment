/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFT=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
let name,eye_color,shirt_type, bling,hair_color;
// just created some variables for my reference.

function mintNFT (name,eye_color,shirt_type, bling,hair_color) {
        // let i=0;
const NFTobj={
    "name_obj":name,
     "eye_color_obj":eye_color,
    "shirt_type_obj":shirt_type,
     "bling_obj":bling,
    "hair_color_obj":hair_color
}
NFT.push(NFTobj);
console.log("minted:"+name);
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i=0;i<NFT.length;i++){
   
   console.log("\n");
   console.log("name : "+NFT[i].name_obj);
   console.log("eye_color : "+NFT[i].eye_color_obj);
   console.log("shirt_type : "+NFT[i].shirt_type_obj);
   console.log("bling : "+NFT[i].bling_obj);
   console.log("hair_color : "+NFT[i].hair_color_obj);
   // console.log(NFT[i]);
   console.log("\n");
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log(`The total number of NFTs in the NFT collection is "${NFT.length}"`);
//  i have used the template literal type of string, that is build by using backticks.  
}

// call your functions below this line

mintNFT("mike","black","cuban","heavy_chains","short_afro");//for making the NFTs
mintNFT("markus","Blue","checked","chains","mid_afro");
mintNFT("regie","brown","printed","rings","regular");

listNFTs();//for printing the NFTs
getTotalSupply();//for printing the total number of NFTs
 

