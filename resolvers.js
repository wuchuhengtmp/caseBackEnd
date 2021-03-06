module.exports = {
    Query: {
        cases: (_, {page, pageSize, keyword, categoryId}, { dataSources }) => dataSources.CasesAPI.getCases({page, pageSize, keyword, categoryId}),
        categories: (_, __, { dataSources }) => dataSources.CategoriesAPI.getCategories(),
        summary: (_, __, {dataSources}) => dataSources.CasesAPI.summary(),
        case: (_, {id}, {dataSources}) => dataSources.CasesAPI.getCaseById(id)
    },
    Mutation: {
        login: (_, {username, password}, { dataSources }) => dataSources.LoginAPI.getToken(username, password),
        create: (_, {
            id,
            label,
            bannerFileIds,
            category,
            coverFileId,
            desc,
            detailFileId,
            iconFileId,
            remark,
        }, {dataSources, ...ctx}) => dataSources.CasesAPI.createCase(ctx, {
            id,
            label,
            bannerFileIds,
            category,
            coverFileId,
            desc,
            detailFileId,
            iconFileId,
            remark,
        }),
        updateCase: (_, {
            id,
            label,
            iconFileId,
            coverFileId,
            bannerFileIds,
            desc,
            remark,
        }, {dataSources}) => dataSources.CasesAPI.updateCase({ id,
            label,
            iconFileId,
            coverFileId,
            bannerFileIds,
            desc,
            remark
        }),
        deleteCase: (_, {caseId}, {dataSources}) => dataSources.CasesAPI.deleteCase({caseId}),
        updatePackage: (_, {id, packageId}, {dataSources}) => dataSources.CasesAPI.uploadPackageInfo({id, packageId}),
        updateCategory: (_, {id, name}, {dataSources}) => dataSources.CategoriesAPI.updateCategory({id, name}),
        createCategory: (_, {name}, {dataSources}) => dataSources.CategoriesAPI.create({name})
    }
}
