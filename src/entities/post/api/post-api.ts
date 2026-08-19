import { apiClient } from "@/shared/api/client";
import type {
  PostCreateRequest,
  PostResponse,
  PostSearchParams,
  PostUpdateRequest,
} from "@/entities/post/model/types";

export const postApi = {
  create(request: PostCreateRequest, accessToken: string) {
    return apiClient<PostResponse>("/api/posts", {
      method: "POST",
      body: request,
      accessToken,
    });
  },

  getList(params: PostSearchParams = {}, accessToken?: string) {
    return apiClient<PostResponse[]>("/api/posts", {
      query: params,
      accessToken,
      cache: "no-store",
    });
  },

  getMine(accessToken: string) {
    return apiClient<PostResponse[]>("/api/posts/me", {
      accessToken,
    });
  },

  getById(postId: number, accessToken?: string) {
    return apiClient<PostResponse>(`/api/posts/${postId}`, {
      accessToken,
      cache: "no-store",
    });
  },

  update(postId: number, request: PostUpdateRequest, accessToken: string) {
    return apiClient<PostResponse>(`/api/posts/${postId}`, {
      method: "PATCH",
      body: request,
      accessToken,
    });
  },

  close(postId: number, accessToken: string) {
    return apiClient<PostResponse>(`/api/posts/${postId}/close`, {
      method: "PATCH",
      accessToken,
    });
  },
};
