import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export type ExportFormat = "PDF" | "CSV";

export type ExportPeriod =
  | "This Month"
  | "Last 3 Months"
  | "This Year";

type ExportModalProps = {
  visible: boolean;
  onClose: () => void;
  onExport: (
    format: ExportFormat,
    period: ExportPeriod
  ) => void;
};

export default function ExportModal({
  visible,
  onClose,
  onExport,
}: ExportModalProps) {
  const [format, setFormat] =
    useState<ExportFormat>("PDF");

  const [period, setPeriod] =
    useState<ExportPeriod>("This Month");

  useEffect(() => {
    if (visible) {
      setFormat("PDF");
      setPeriod("This Month");
    }
  }, [visible]);

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
          {/* HEADER */}

          <View style={styles.header}>
            <View>
              <Text style={styles.title}>
                Export Transactions
              </Text>

              <Text style={styles.subtitle}>
                Download your financial activity
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
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

          {/* FORMAT */}

          <Text style={styles.sectionLabel}>
            EXPORT FORMAT
          </Text>

          <View style={styles.formatRow}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={[
                styles.formatCard,
                format === "PDF" &&
                  styles.formatCardActive,
              ]}
              onPress={() => setFormat("PDF")}
            >
              <View
                style={[
                  styles.formatIcon,
                  format === "PDF" &&
                    styles.formatIconActive,
                ]}
              >
                <MaterialCommunityIcons
                  name="file-pdf-box"
                  size={25}
                  color={
                    format === "PDF"
                      ? "#2563EB"
                      : "#64748B"
                  }
                />
              </View>

              <Text
                style={[
                  styles.formatTitle,
                  format === "PDF" &&
                    styles.formatTitleActive,
                ]}
              >
                PDF
              </Text>

              <Text style={styles.formatSubtitle}>
                Statement report
              </Text>

              {format === "PDF" && (
                <View style={styles.checkBadge}>
                  <Ionicons
                    name="checkmark"
                    size={11}
                    color="#FFFFFF"
                  />
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.75}
              style={[
                styles.formatCard,
                format === "CSV" &&
                  styles.formatCardActive,
              ]}
              onPress={() => setFormat("CSV")}
            >
              <View
                style={[
                  styles.formatIcon,
                  format === "CSV" &&
                    styles.formatIconActive,
                ]}
              >
                <MaterialCommunityIcons
                  name="file-delimited-outline"
                  size={25}
                  color={
                    format === "CSV"
                      ? "#2563EB"
                      : "#64748B"
                  }
                />
              </View>

              <Text
                style={[
                  styles.formatTitle,
                  format === "CSV" &&
                    styles.formatTitleActive,
                ]}
              >
                CSV
              </Text>

              <Text style={styles.formatSubtitle}>
                Spreadsheet data
              </Text>

              {format === "CSV" && (
                <View style={styles.checkBadge}>
                  <Ionicons
                    name="checkmark"
                    size={11}
                    color="#FFFFFF"
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* PERIOD */}

          <Text style={styles.sectionLabel}>
            DATE RANGE
          </Text>

          {(
            [
              "This Month",
              "Last 3 Months",
              "This Year",
            ] as ExportPeriod[]
          ).map((item) => {
            const selected = period === item;

            return (
              <TouchableOpacity
                key={item}
                activeOpacity={0.75}
                style={[
                  styles.periodRow,
                  selected &&
                    styles.periodRowSelected,
                ]}
                onPress={() => setPeriod(item)}
              >
                <View
                  style={[
                    styles.periodIcon,
                    selected &&
                      styles.periodIconSelected,
                  ]}
                >
                  <Ionicons
                    name="calendar-outline"
                    size={18}
                    color={
                      selected
                        ? "#2563EB"
                        : "#64748B"
                    }
                  />
                </View>

                <Text
                  style={[
                    styles.periodText,
                    selected &&
                      styles.periodTextSelected,
                  ]}
                >
                  {item}
                </Text>

                <View
                  style={[
                    styles.radio,
                    selected &&
                      styles.radioSelected,
                  ]}
                >
                  {selected && (
                    <View
                      style={styles.radioInner}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}

          {/* SECURITY */}

          <View style={styles.securityBox}>
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={20}
              color="#16A34A"
            />

            <View style={styles.securityContent}>
              <Text style={styles.securityTitle}>
                Secure Export
              </Text>

              <Text style={styles.securityText}>
                Your transaction data is protected
                throughout the export process.
              </Text>
            </View>
          </View>

          {/* EXPORT */}

          <TouchableOpacity
            activeOpacity={0.82}
            style={styles.exportButton}
            onPress={() =>
              onExport(format, period)
            }
          >
            <Ionicons
              name="download-outline"
              size={19}
              color="#FFFFFF"
            />

            <Text style={styles.exportButtonText}>
              Export Transactions
            </Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(15,23,42,0.38)",
    justifyContent: "flex-end",
  },

  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  title: {
    color: "#0F172A",
    fontSize: 20,
    fontWeight: "900",
  },

  subtitle: {
    color: "#64748B",
    fontSize: 11,
    marginTop: 4,
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
    color: "#64748B",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.8,
    marginBottom: 11,
  },

  formatRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },

  formatCard: {
    flex: 1,
    minHeight: 120,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 14,
    backgroundColor: "#FFFFFF",
  },

  formatCardActive: {
    borderColor: "#2563EB",
    backgroundColor: "#F8FAFF",
  },

  formatIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  formatIconActive: {
    backgroundColor: "#EFF6FF",
  },

  formatTitle: {
    color: "#0F172A",
    fontSize: 14,
    fontWeight: "800",
  },

  formatTitleActive: {
    color: "#2563EB",
  },

  formatSubtitle: {
    color: "#94A3B8",
    fontSize: 9,
    marginTop: 3,
  },

  checkBadge: {
    position: "absolute",
    right: 10,
    top: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },

  periodRow: {
    height: 57,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 9,
  },

  periodRowSelected: {
    borderColor: "#BFDBFE",
    backgroundColor: "#F8FAFF",
  },

  periodIcon: {
    width: 35,
    height: 35,
    borderRadius: 11,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  periodIconSelected: {
    backgroundColor: "#EFF6FF",
  },

  periodText: {
    flex: 1,
    color: "#475569",
    fontSize: 12,
    fontWeight: "700",
  },

  periodTextSelected: {
    color: "#0F172A",
    fontWeight: "800",
  },

  radio: {
    width: 19,
    height: 19,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#CBD5E1",
    alignItems: "center",
    justifyContent: "center",
  },

  radioSelected: {
    borderColor: "#2563EB",
  },

  radioInner: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#2563EB",
  },

  securityBox: {
    flexDirection: "row",
    backgroundColor: "#F0FDF4",
    borderRadius: 15,
    padding: 12,
    marginTop: 10,
    marginBottom: 18,
  },

  securityContent: {
    flex: 1,
    marginLeft: 9,
  },

  securityTitle: {
    color: "#15803D",
    fontSize: 10,
    fontWeight: "800",
  },

  securityText: {
    color: "#16A34A",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 2,
  },

  exportButton: {
    height: 53,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  exportButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
    marginLeft: 8,
  },
});