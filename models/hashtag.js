const Sequelize = require("sequelize");

class Hashtag extends Sequelize.Model {
  static initiate(sequelize) {
    // 테이블 정보 입력
    Hashtag.init(
      {
        title: {
          type: Sequelize.STRING(15),
          allowNull: true,
          unique: true,
        },
      },
      {
        sequelize,
        timestamps: true, // createdAt, updatedAt
        underscored: false, // created_at, updated_at (true일시)
        paranoid: false, // deletedAt 유저 삭제일
        modelName: "Hashtag",
        tableName: "hashtags",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    // 테이블 관계를 입력
    db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
  }
}

module.exports = Hashtag;
