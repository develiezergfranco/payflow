import React, { useState } from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

type InputType = "name" | "date" | "currency" | "barcode";

interface BoletoFormInputProps extends TextInputProps {
    type: InputType;
    onChangeValue?: (value: string | number) => void;
}

export function BoletoFormInput({
    type,
    onChangeValue,
    style,
    ...rest
}: BoletoFormInputProps) {
    const [displayValue, setDisplayValue] = useState("");

    const formatName = (value: string) => {
        const cleaned = value.replace(/\s+/g, " ");
        return cleaned;
    };

    const formatDate = (value: string) => {
        let cleaned = value.replace(/\D/g, "").slice(0, 8);
        if (cleaned.length >= 5) {
            return cleaned.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
        }
        if (cleaned.length >= 3) {
            return cleaned.replace(/(\d{2})(\d{1,2})/, "$1/$2");
        }
        return cleaned;
    };

    const formatCurrency = (value: string) => {
        let cleaned = value.replace(/\D/g, "");
        let numberValue = Number(cleaned) / 100;

        const formatted = numberValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        onChangeValue?.(numberValue);
        return formatted;
    };

    const formatBarcode = (value: string) => {
        const cleaned = value.replace(/\D/g, "").slice(0, 48);
        return cleaned;
    };

    const handleChange = (value: string) => {
        let formatted = value;

        switch (type) {
            case "name":
                formatted = formatName(value);
                onChangeValue?.(formatted);
                break;

            case "date":
                formatted = formatDate(value);
                onChangeValue?.(formatted);
                break;

            case "currency":
                formatted = formatCurrency(value);
                break;

            case "barcode":
                formatted = formatBarcode(value);
                onChangeValue?.(formatted);
                break;
        }

        setDisplayValue(formatted);
    };

    return (
        <TextInput
            {...rest}
            value={displayValue}
            onChangeText={handleChange}
            style={[style]}
        />
    );
}


