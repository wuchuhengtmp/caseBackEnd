const {gql} = require('apollo-server')

const typeDefs = gql`
    enum Role {
        ADMIN
        REVIEWER
        USER
        UNKNOWN
    }
    directive @auth(
        requires: Role = ADMIN,
    ) on OBJECT | FIELD_DEFINITION
    
    type File {
        id: Int!
        url: String!
    }
    enum AppType {
        android
        ios
    }
    """ 单个案例数据 """
    type Case {
        id: ID!
        uid: Int!
        label: String!
        version: String!
        size: Int!
        icon: File!
        type: AppType!
        file: File!
        cover: File!
        banner: [File]!
        detail: File!
        desc: String!
        remark: String!
    }
    """ 案例数据分页 """
    type CaseConnection {
        total: Int!
        items: [Case]!
    }
    type Category {
        id: Int!
        """ 分类名 """
        name: String!
    }
    type Query {
        cases(page: Int! = 1, pageSize: Int! = 12): CaseConnection!
        """ 分类列表  """
        categories: [Category]!
    }
    type LoginRes {
        accessToken: String!
        expiredAt: Int
    }
    type UploadFile {
        name: String!
        fileBase64: String!
    }
    type Mutation {
        login(username: String!, password: String!): LoginRes!
        """ 创建案例 """
        create (
            id: Int!,
            label: String!, 
            bannerFileIds: [Int!]!,
            category: Int!,
            coverFileId: Int!,
            desc: String!,
            detailFileId: Int!,
            iconFileId: Int!,
            remark: String!,
        ): Int! @auth
        
    }
`
module.exports = typeDefs
