export class FindAllMapperSQL {
    protected buildQuery(): string {
        const query = `
            SELECT
                id,
                name,
                email,
                "createdAt",
                "updatedAt"
            FROM users;
        `;

        return query;
    }

    public getQuery(): string {
        const query = this.buildQuery();

        return query;
    }
}
