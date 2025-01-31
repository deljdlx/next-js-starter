interface FenJson {
    board: string[][];  // Plateau sous forme de tableau 2D
    turn: "w" | "b";    // Tour du joueur
    castling: string;   // Droits de roque
    enPassant: string | null; // Case en passant
    halfMove: number;   // Demi-coups pour la règle des 50 coups
    fullMove: number;   // Numéro du coup
}

export const fenToJson = (fen: string): FenJson => {
    const [position, turn, castling, enPassant, halfMove, fullMove] = fen.split(" ");
    
    const rows = position.split("/");
    const board: string[][] = rows.map(row => {
        let expandedRow: string[] = [];
        for (const char of row) {
            if (/\d/.test(char)) {
                expandedRow.push(...Array(Number(char)).fill("")); // Cases vides
            } else {
                expandedRow.push(char); // Pièce
            }
        }
        return expandedRow;
    });

    return {
        board,
        turn: turn as "w" | "b",
        castling,
        enPassant: enPassant !== "-" ? enPassant : null,
        halfMove: parseInt(halfMove, 10),
        fullMove: parseInt(fullMove, 10)
    };
};


export const jsonToFen = (json: FenJson): string => {
    const position = json.board
        .map(row => row.reduce((acc, char) => {
            if (char === "") {
                return acc.slice(-1).match(/\d/) ? acc.slice(0, -1) + (parseInt(acc.slice(-1)) + 1) : acc + "1";
            }
            return acc + char;
        }, ""))
        .join("/");

    return `${position} ${json.turn} ${json.castling} ${json.enPassant ?? "-"} ${json.halfMove} ${json.fullMove}`;
};

// 🎯 **Exemple d'utilisation**
// const fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
// console.log(fenToJson(fen));
