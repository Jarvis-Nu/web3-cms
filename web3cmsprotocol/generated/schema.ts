// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PostEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PostEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PostEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PostEntity", id.toString(), this);
    }
  }

  static load(id: string): PostEntity | null {
    return changetype<PostEntity | null>(store.get("PostEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get postId(): Bytes {
    let value = this.get("postId");
    return value!.toBytes();
  }

  set postId(value: Bytes) {
    this.set("postId", Value.fromBytes(value));
  }

  get nameOfPost(): string | null {
    let value = this.get("nameOfPost");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nameOfPost(value: string | null) {
    if (!value) {
      this.unset("nameOfPost");
    } else {
      this.set("nameOfPost", Value.fromString(<string>value));
    }
  }

  get postDescription(): string | null {
    let value = this.get("postDescription");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set postDescription(value: string | null) {
    if (!value) {
      this.unset("postDescription");
    } else {
      this.set("postDescription", Value.fromString(<string>value));
    }
  }

  get thumbnailUrl(): string | null {
    let value = this.get("thumbnailUrl");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set thumbnailUrl(value: string | null) {
    if (!value) {
      this.unset("thumbnailUrl");
    } else {
      this.set("thumbnailUrl", Value.fromString(<string>value));
    }
  }

  get postContent(): string | null {
    let value = this.get("postContent");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set postContent(value: string | null) {
    if (!value) {
      this.unset("postContent");
    } else {
      this.set("postContent", Value.fromString(<string>value));
    }
  }

  get postDate(): string | null {
    let value = this.get("postDate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set postDate(value: string | null) {
    if (!value) {
      this.unset("postDate");
    } else {
      this.set("postDate", Value.fromString(<string>value));
    }
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }
}
