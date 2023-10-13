//1. Import Area

//2. Defination Area
async function POST(req){

    const { city,area } = await req.json();
                       //object.property.property
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('searchReferer')
    //Every fucntion return something
    return Response.json({  
                            msg:"hello "+city,
                            msg2:`hello2 ${area}`, 
                            msg3:`hello3 ${query}`, 
                         });
}
//3. Export
//3.2 Named Export
            //   {  KEY:VALUE }
module.exports = { POST:POST  }