import BookCard from "./BookCard";

export default function BookList({ books }) {
    return (
        <section className="book-list" aria-label="Acervo">
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    available={book.available}
                />
            ))}
        </section>
    );
}