import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
  async get(key: string) {
    return AsyncStorage.getItem(key);
  },

  async set(key: string, value: string) {
    return AsyncStorage.setItem(key, value);
  },

  async remove(key: string) {
    return AsyncStorage.removeItem(key);
  },

  async clear() {
    return AsyncStorage.clear();
  },
};