"use strict";
exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 7426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E4": () => (/* binding */ GET_Posts),
/* harmony export */   "Hz": () => (/* binding */ GET_Post),
/* harmony export */   "KH": () => (/* binding */ UPLOAD_IMAGE_TO_CLOUDINARY),
/* harmony export */   "QU": () => (/* binding */ Edit_Post),
/* harmony export */   "WO": () => (/* binding */ RELOAD_COMMENTS),
/* harmony export */   "YR": () => (/* binding */ Remove_Post),
/* harmony export */   "Zr": () => (/* binding */ GET_trendingPosts),
/* harmony export */   "hc": () => (/* binding */ UnLike_Post),
/* harmony export */   "l5": () => (/* binding */ GET_recentPosts),
/* harmony export */   "ss": () => (/* binding */ GET_Search_Posts),
/* harmony export */   "wL": () => (/* binding */ Like_Post),
/* harmony export */   "zL": () => (/* binding */ Create_Post)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(825);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_Post = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  query GetPost($id: String!) {
    post(id: $id) {
      id
      title
      body
      thumbnail
      likes
      views
      is_temp
      is_private
      subs_count
      released_at
      created_at
      updated_at
      liked
      tags {
        tag {
          name
        }
      }
      bookInfo {
        bookTitle
        bookContent
        bookUrl
        bookIsbn
        bookAuthors
      }
      user {
        id
        username
        profile {
          id
          bio
          profile_name
          thumbnail
        }
      }
      subs {
        id
        text
        likes
        has_replies
        deleted
        level
        reply
        created_at
        updated_at

        upvotes
        replies {
          id
          text
          has_replies
          created_at
          updated_at
        }
        replies_count
        user {
          id
          username
          profile {
            id
            bio
            profile_name
            thumbnail
          }
        }
      }
    }
  }
`;
const GET_Posts = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  query GetPosts($cursor: String, $username: String, $istemp: Boolean) {
    posts(cursor: $cursor, username: $username, istemp: $istemp) {
      id
      title
      body
      thumbnail
      likes
      views
      is_temp
      is_private
      released_at
      created_at
      updated_at
      liked
      tags {
        tag {
          name
        }
      }
      bookInfo {
        bookTitle
        bookContent
        bookUrl
        bookIsbn
        bookAuthors
      }
      user {
        id
        username
      }
      subs {
        id
        text
      }
      subs_count
    }
  }
`;
const GET_recentPosts = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  query RecentPosts($cursor: String, $limit: Int) {
    recentPosts(cursor: $cursor, limit: $limit) {
      id
      title

      thumbnail
      likes
      views
      is_temp
      postbody
      is_private
      released_at
      created_at
      updated_at
      liked
      bookInfo {
        bookTitle
        bookContent
        bookUrl
        bookIsbn
        bookAuthors
      }
      user {
        id
        username
      }
      subs {
        id
        text
      }
      subs_count
    }
  }
`;
const GET_trendingPosts = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  query TrendingPosts(
    $offset: Int
    $limit: Int
    $timeframe: String
    $from: Date
    $to: Date
  ) {
    trendingPosts(
      offset: $offset
      limit: $limit
      timeframe: $timeframe
      from: $from
      to: $to
    ) {
      id
      title
      thumbnail
      likes
      postbody
      views
      is_temp
      is_private
      released_at
      created_at
      updated_at
      liked
      bookInfo {
        bookTitle
        bookContent
        bookUrl
        bookIsbn
        bookAuthors
      }
      user {
        id
        username
      }
      subs {
        id
        text
      }
      subs_count
    }
  }
`;
const Create_Post = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  mutation CreatePost(
    $body: String!
    $title: String!
    $thumbnail: String
    $postbody: String
    $tags: [String]
    $is_temp: Boolean
    $is_private: Boolean
    $bookTitle: String
    $bookContent: String
    $bookUrl: String
    $bookIsbn: String
    $bookAuthors: [String]
  ) {
    createPost(
      body: $body
      title: $title
      tags: $tags
      thumbnail: $thumbnail
      postbody: $postbody
      is_temp: $is_temp
      is_private: $is_private
      bookTitle: $bookTitle
      bookContent: $bookContent
      bookUrl: $bookUrl
      bookIsbn: $bookIsbn
      bookAuthors: $bookAuthors
    ) {
      id
      title
      body
      thumbnail
      likes
      views
      is_temp
      postbody
      is_private
      released_at
      created_at
      updated_at
      liked
      bookInfo {
        bookTitle
        bookContent
        bookUrl
        bookIsbn
        bookAuthors
      }
      user {
        id
        username
      }
    }
  }
`;
const RELOAD_COMMENTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  query ReloadComments($id: String!) {
    post(id: $id) {
      id
      title
      body
      thumbnail
      likes
      views
      is_temp
      is_private
      subs_count
      released_at
      created_at
      updated_at
      liked
      bookInfo {
        bookTitle
        bookContent
        bookUrl
        bookIsbn
        bookAuthors
      }
      user {
        id
        username
      }
      subs {
        id
        text
        updated_at
      }
    }
  }
`;
const GET_Search_Posts = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  query SearchPosts($searchInput: String) {
    searchPosts(searchInput: $searchInput) {
      id
      title
      body
      thumbnail
      likes
      views
      is_temp
      is_private
      released_at
      created_at
      updated_at
      liked
      bookInfo {
        bookTitle
        bookContent
        bookUrl
        bookIsbn
        bookAuthors
      }
      user {
        id
        username
      }
      subs {
        id
        text
      }
      subs_count
    }
  }
`;
const Edit_Post = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  mutation EditPost(
    $id: String!
    $title: String
    $body: String
    $thumbnail: String
    $tags: [String]
    $is_temp: Boolean
    $is_private: Boolean
    $postbody: String
  ) {
    editPost(
      id: $id
      title: $title
      body: $body
      tags: $tags
      is_temp: $is_temp
      thumbnail: $thumbnail
      is_private: $is_private
      postbody: $postbody
    ) {
      id
      title
      body
      thumbnail
      likes
      views
      is_temp
      is_private
      released_at
      created_at
      updated_at
      liked
      user {
        id
        username
      }
      subs {
        id
        text
      }
      subs_count
    }
  }
`;
const Remove_Post = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  mutation RemovePost($id: String!) {
    removePost(id: $id)
  }
`;
const Like_Post = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  mutation LikePost($id: String!) {
    likePost(id: $id) {
      id
      title
      body
      thumbnail
      likes
      views
      is_temp
      is_private
      released_at
      created_at
      updated_at
      liked
      user {
        id
        username
      }
      subs {
        id
        text
      }
      subs_count
    }
  }
`;
const UnLike_Post = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  mutation UnlikePost($id: String!) {
    unlikePost(id: $id) {
      id
      title
      body
      thumbnail
      likes
      views
      is_temp
      is_private
      released_at
      created_at
      updated_at
      liked
      user {
        id
        username
      }
      subs {
        id
        text
      }
      subs_count
    }
  }
`;
const UPLOAD_IMAGE_TO_CLOUDINARY = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  mutation UploadImageToCloudinary($body: String!, $width: Int!, $height: Int!) {
    uploadImage(body: $body, width: $width, height: $height) {
      public_id
      url
    }
  }
`;


/***/ })

};
;