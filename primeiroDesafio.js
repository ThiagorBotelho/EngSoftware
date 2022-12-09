class Book {
    constructor(title, descrip, author){
        this.title = title
        this.author = author
        this.descrip = description
        this.id = title
        
    } 
}

class Library { 
    constructor(){
        this.books = []
    }

    addBook(Info) {
        let book = new Book(Info['title'], Info['description'], Info('author')) 
        this.books.push(book)
        return
    }

    getBook(){
        console.log(this.books)
        return
    }
    removeBookByID(id){
        for (let i = 0; i < this.books.length; i++ ) {
            if(this.books[i].title === id) {
                this.books.splice(i,1)
                console.log('Livro ' +id+ ' foi removido de Library com sucesso!' )
                return
            }
        }
        console.log('Livro inexistente')
    }   
    getBookByID(id) {
        for (let i = 0; i < this.books.length; i++ ) {
            if(this.books[i].title === id){
                console.log("Livro " +id+ " encontrado com sucesso!")
                return
            } 
                
        }
        
        console.log("Livro não encontrado")
        }
    updateBookByID(id, update) {
        for (let i = 0; i < this.books.length; i++ ){
            if(this.books[i].title === id){
                this.books[i].title = update['title']
                this.books[i].author = update['author']
                this.books[i].description = description['description']
                console.log("Atualizado!")
                return
            }
        }
        console.log("Livro" +id+ "não encontrado!")
                         
        
    }
    
}

biblio = new Library()

biblio.addBook({title:'A arte da guerra', description:'A Arte da Guerra é um antigo tratado militar chinês que data do fim do período das Primaveras e Outonos.', author:'Sun Tzu'})
biblio.addBook({title:'Ponto de inflexão', description:'Um livro que vai te ajudar a fazer seu próprio caminho', author:'Flávio Augusto da Silva'})

biblio.getBookByID('A arte da guerra')
biblio.getBookByID('testeNãoEncontrar')
console.log(biblio.getBook())

biblio.removeBookByID("A arte da guerra")
biblio.getBookByID('A arte da guerra')
biblio.updateBookByID({title:'Ponto de inflexão', description:'Livro que mostra os erros das suas decisões da vida até então.', author:'Flávio Augusto da Silva'})
