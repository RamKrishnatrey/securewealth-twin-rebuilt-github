import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

export type Beneficiary = {
  id: string;
  name: string;
  bank: string;
  account: string;
  initials: string;
  ifsc?: string;
  color: string;
};

type NewBeneficiary = {
  name: string;
  bank: string;
  account: string;
  ifsc?: string;
};

type BeneficiaryContextType = {
  beneficiaries: Beneficiary[];

  selectedBeneficiary:
    | Beneficiary
    | null;

  addBeneficiary: (
    beneficiary: NewBeneficiary
  ) => Beneficiary;

  selectBeneficiary: (
    beneficiary: Beneficiary | null
  ) => void;
};

const initialBeneficiaries: Beneficiary[] = [
  {
    id: "1",
    name: "Aarav Sharma",
    bank: "HDFC Bank",
    account: "•••• 4821",
    initials: "AS",
    color: "#2563EB",
  },
  {
    id: "2",
    name: "Riya Kapoor",
    bank: "ICICI Bank",
    account: "•••• 7194",
    initials: "RK",
    color: "#7C3AED",
  },
  {
    id: "3",
    name: "Aditya Verma",
    bank: "SBI",
    account: "•••• 2358",
    initials: "AV",
    color: "#0891B2",
  },
];

const BeneficiaryContext =
  createContext<
    BeneficiaryContextType | undefined
  >(undefined);

function getInitials(name: string) {
  const words = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) {
    return "NA";
  }

  if (words.length === 1) {
    return words[0]
      .substring(0, 2)
      .toUpperCase();
  }

  return (
    words[0][0] +
    words[words.length - 1][0]
  ).toUpperCase();
}

function maskAccount(account: string) {
  const cleanAccount =
    account.replace(/\D/g, "");

  const lastFour =
    cleanAccount.slice(-4);

  return `•••• ${lastFour}`;
}

export function BeneficiaryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [
    beneficiaries,
    setBeneficiaries,
  ] = useState<Beneficiary[]>(
    initialBeneficiaries
  );
const [
  selectedBeneficiary,
  setSelectedBeneficiary,
] = useState<Beneficiary | null>(
  null
);
  

  const addBeneficiary = (
    beneficiary: NewBeneficiary
  ) => {
    const newBeneficiary: Beneficiary = {
  id: Date.now().toString(),

  name: beneficiary.name.trim(),

  bank: beneficiary.bank.trim(),

  account: maskAccount(
    beneficiary.account
  ),

  initials: getInitials(
    beneficiary.name
  ),

  ifsc:
    beneficiary.ifsc
      ?.trim()
      .toUpperCase(),

  color: "#2563EB",
};

    setBeneficiaries((current) => [
      ...current,
      newBeneficiary,
    ]);

    return newBeneficiary;
  };

  const selectBeneficiary = (
    beneficiary: Beneficiary | null
  ) => {
    setSelectedBeneficiary(
      beneficiary
    );
  };

  return (
    <BeneficiaryContext.Provider
      value={{
        beneficiaries,
        selectedBeneficiary,
        addBeneficiary,
        selectBeneficiary,
      }}
    >
      {children}
    </BeneficiaryContext.Provider>
  );
}

export function useBeneficiaries() {
  const context = useContext(
    BeneficiaryContext
  );

  if (!context) {
    throw new Error(
      "useBeneficiaries must be used inside BeneficiaryProvider"
    );
  }

  return context;
}