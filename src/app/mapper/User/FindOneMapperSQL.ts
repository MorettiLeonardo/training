export class FindOneMapperSQL {
    protected buildQuery(id: string): string {
        const query = `
            SELECT
                id,
                name,
                email,
                "createdAt",
                "updatedAt"
            FROM users
            WHERE id = :id;
        `;

        return query;
    }

    public getQuery(id: string): string {
        const query = this.buildQuery(id);

        return query;
    }
}
