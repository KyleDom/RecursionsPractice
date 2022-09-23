import readline from "readline-sync"

class chatNode {
    public data : string;
    public reply1 : chatNode | null; 
    public reply2 : chatNode | null;

    constructor(data: string){
        this.data = data;
        this.reply1 = null;
        this.reply2 = null;
    }


}

class Thread { 
    public main : chatNode | null; 
    constructor(main?:chatNode){
        this.main = main || null;
    }

    public insert(node: chatNode | null = this.main, value: string): chatNode{
        if(node === null) return new chatNode(value)
        else{
            if(node.reply1 === null){
                node.reply1 = this.insert(node.reply1, value)
            }else {
                node.reply2 = this.insert(node.reply2, value)
            }
            return node 
        }
    }
    reply (){
        const reply = readline.question("Write something: ")
        this.insert(this.main, reply)
        return this.main
    }
    seeChatHistory(){
        console.log(this.main)
    }
}


//test
const testMsg = new chatNode("Hello Kalibutan!")
const threadSample = new Thread(testMsg)

threadSample.reply()
threadSample.reply()
threadSample.reply()
threadSample.reply()
threadSample.reply()
threadSample.reply()

threadSample.seeChatHistory()
