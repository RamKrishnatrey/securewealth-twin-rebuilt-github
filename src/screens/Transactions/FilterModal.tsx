import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type TransactionFilters = {
  category: string;
  status: string;
};

type FilterModalProps = {
  visible: boolean;
  filters: TransactionFilters;
  onClose: () => void;
  onApply: (filters: TransactionFilters) => void;
  onReset: () => void;
};

const categories = [
  "All",
  "Food & Dining",
  "Shopping",
  "Transport",
  "Entertainment",
  "Income",
];

const statuses = [
  "All",
  "Completed",
  "Pending",
  "Failed",
];

export default function FilterModal({
  visible,
  filters,
  onClose,
  onApply,
  onReset,
}: FilterModalProps) {
  const [category, setCategory] = React.useState(
    filters.category
  );

  const [status, setStatus] = React.useState(
    filters.status
  );

  React.useEffect(() => {
    if (visible) {
      setCategory(filters.category);
      setStatus(filters.status);
    }
  }, [visible, filters]);

  const handleReset = () => {
    setCategory("All");
    setStatus("All");
    onReset();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable
        style={styles.overlay}
        onPress={onClose}
      >
        <Pressable
          style={styles.sheet}
          onPress={(event) =>
            event.stopPropagation()
          }
        >
          {/* Header */}

          <View style={styles.header}>
            <View>
              <Text style={styles.title}>
                Filter Transactions
              </Text>

              <Text style={styles.subtitle}>
                Refine your activity
              </Text>
            </View>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
            >
              <Ionicons
                name="close"
                size={21}
                color="#0F172A"
              />
            </TouchableOpacity>
          </View>

          {/* Category */}

          <Text style={styles.sectionLabel}>
            CATEGORY
          </Text>

          <View style={styles.optionsWrap}>
            {categories.map((item) => {
              const selected =
                category === item;

              return (
                <TouchableOpacity
                  key={item}
                  activeOpacity={0.75}
                  style={[
                    styles.option,
                    selected &&
                      styles.optionSelected,
                  ]}
                  onPress={() =>
                    setCategory(item)
                  }
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected &&
                        styles.optionTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Status */}

          <Text style={styles.sectionLabel}>
            STATUS
          </Text>

          <View style={styles.optionsWrap}>
            {statuses.map((item) => {
              const selected =
                status === item;

              return (
                <TouchableOpacity
                  key={item}
                  activeOpacity={0.75}
                  style={[
                    styles.option,
                    selected &&
                      styles.optionSelected,
                  ]}
                  onPress={() =>
                    setStatus(item)
                  }
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected &&
                        styles.optionTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Actions */}

          <View style={styles.actions}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.resetButton}
              onPress={handleReset}
            >
              <Text style={styles.resetText}>
                Reset
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.applyButton}
              onPress={() =>
                onApply({
                  category,
                  status,
                })
              }
            >
              <Ionicons
                name="checkmark"
                size={18}
                color="#FFFFFF"
              />

              <Text style={styles.applyText}>
                Apply Filters
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(15,23,42,0.35)",
    justifyContent: "flex-end",
  },

  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 32,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
  },

  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0F172A",
  },

  subtitle: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 3,
  },

  closeButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#64748B",
    letterSpacing: 0.7,
    marginBottom: 12,
  },

  optionsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
  },

  option: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
    marginRight: 8,
    marginBottom: 9,
  },

  optionSelected: {
    backgroundColor: "#EFF6FF",
    borderColor: "#2563EB",
  },

  optionText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
  },

  optionTextSelected: {
    color: "#2563EB",
    fontWeight: "800",
  },

  actions: {
    flexDirection: "row",
    marginTop: 4,
  },

  resetButton: {
    flex: 1,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  resetText: {
    color: "#475569",
    fontWeight: "700",
    fontSize: 13,
  },

  applyButton: {
    flex: 2,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },

  applyText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 13,
  },
});