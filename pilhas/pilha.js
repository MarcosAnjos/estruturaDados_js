
class Stack {
    constructor() {
        this.count = 0
        this.items = {} 
    }
    // metodos
    push(element){
        this.items[this.count] = element
        this.count++
    }

    pop(){
        // verifica se a pilha está vazia
        if( this.isEmpty() )
            return undefined
        
        this.count--                            // Se a pilha não estiver vazia decrementamos o topo
        const result = this.items[this.count]   // Armazena o topo da pilha
        delete this.items[this.count]           // Deletar o topo da pilha 
        return result                           // Devolve o item excluido
    }

    peek(){
        // verifica
        if( this.isEmpty() )
            return undefined

        return this.items[this.count -1]
    }

    isEmpty(){
        return this.count == 0
    }    

    size(){
        return this.count
    }

    clear(){
        delete(items)
        this.items = {}
        this.count = 0
    }

    toString() {
        if(this.isEmpty()) // se estiver vazio devolve vazio
            return ''
        let objString = `${this.items[0]}` // Senao inicializa primeiro elemento 
        for( let i = 1; i < this.count; i++){ // Vamos percorrer todas as chaves da pilha ate o TOPO
            objString = `${objString}, ${this.items[i]}` // ADD (,) entre cada elemento
        }
        return objString
    }
}
module.exports = Stack


// const stack = new Stack()
// stack.push(5)
// stack.push(8)
// stack.push(10)


// console.log(stack.count) // 2

// // para remover todos os elementos da pilha 
// // while( !stack.isEmpty() ){
// //     stack.pop()
// // }

// // console.log(stack.isEmpty()) // true - vazia

// console.log(toString(stack.items))
