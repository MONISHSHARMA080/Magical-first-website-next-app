import * as fs from 'fs';



export async function GET(request: Request) {
 
    const url = new URL(request.url);
    const dirName = url.searchParams.get('user_name') ;
    let newDirPath =  process.cwd()+`/app/${dirName}`
    if(!dirName){
        return Response.json({ success: false, error: "user name not provided" }, { status: 400 });
    }

    let cwd = process.cwd()
    console.log(`\n\n if ${newDirPath} exists ==>> ${fs.existsSync(newDirPath)}   \n\n`);
    
    if(!fs.existsSync(newDirPath)){

        //  dir for the user's name 
        let result_from_creating_userName_dir = fs.mkdirSync(newDirPath, { recursive: true })
        if (result_from_creating_userName_dir === undefined){
            return Response.json({ success: false, error: "Failed to create directory", message_for_the_server:"couldn't make user name dir "  }, { status: 500 });
        }
        //  making the temp dir 
        let result_from_creating_temp_dir = fs.mkdirSync(newDirPath+"/temp", { recursive: true })
        if (result_from_creating_temp_dir === undefined){
            return Response.json({ success: false, error: "Failed to create directory", message_for_the_server:"couldn't make temp dir "  }, { status: 500 });
        }
        //  make the file in the dir 
        fs.writeFileSync(newDirPath+"/temp/page.tsx","")
 
    } else{
        return Response.json({ success: true, "message":"directory already exists" }, { status: 201 });
    }
    console.log("fs.readdirSync(process.cwd())");
    console.log(fs.readdirSync(process.cwd()+"/app"));
    // console.log(fs.readdirSync(process.cwd()));

    return Response.json({ success: true, dir:fs.readdirSync(process.cwd()) }, { status: 200 });

    
  
    // try { 
      
    //   // Get the current working directory
    //   const cwd = process.cwd()+"/app";
    //   console.log("\n\n-----+++------");
    //   console.log(cwd+"/api");
    //   console.log("--------+++---\n\n",fs.readdirSync(cwd));
      
    //   const url = new URL(request.url);
    //   const dirName = url.searchParams.get('dir_name') || 'default_dir_name';
    //   const fileName = 'page.tsx';
    //   const fileContent = fs.readFileSync(cwd+"/page.tsx");
    //   console.log(`\n\ndirname ${dirName} .... fileName-> ${fileName}  ...\n\n`);
      
      
    //   // Construct the path for the new directory
    //   const dirPath = path.join(cwd,  dirName);
    //   console.log("Dir-path",dirPath);
      
  
    //   // Create the new directory
    //   if (!fs.existsSync(dirPath)) {
    //     fs.mkdirSync(dirPath, { recursive: true });
    //   }
  
    //   // Construct the path for the new file
    //   const filePath = path.join(dirPath, fileName);
  
    //   // Create the new file and write its content
    //   fs.writeFileSync(filePath, fileContent);
  
    //   return Response.json({ success: true,message:"Created successfully" });
    // } catch (error:any) {
    //   console.error('Error creating directory or file:', error);
    //   return Response.json({ success: false, error: error.message }, { status: 500 });
    // }




  }  
  