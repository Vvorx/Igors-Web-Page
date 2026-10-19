---
title: PCapScope
---

# Overview

PCAPScope is a web-based network intrusion detection system (IDS) created as my final year project. The aim was to explore how machine learning could support the analysis of network traffic and help identify flows that may indicate malicious or unusual activity.

Rather than building only a model in a notebook, I developed an entire application that takes packet captures, converts them into meaningful network-flow data, runs anomaly detection, and presents the results through an interactive dashboard.

## Development

Before implementing the system, I had to research several areas of cybersecurity and machine learning. This included learning how intrusion detection systems are designed, how network attacks appear in packet data, and how packet-level information can be aggregated into flows suitable for analysis.

I also researched the CICIDS2017 dataset and its feature format so that the system could work with recognised network-traffic features such as flow duration, packet counts, packet lengths, inter-arrival times, destination ports, and TCP flags. Understanding these features was important because the quality and consistency of the extracted data directly affects the reliability of the predictions.

## Challenges and limitations

I quickly realised that the scope of this project was way bigger than I could handle in a reasonable amount of time. With this in mind, I'd treat this more as a way to get my hands dirty with packets and ids than a full fledged application. 

The models were trained and designed around the CICIDS2017 dataset. Therefore they look for the traffic patterns, feature distributions and attack types that are present primarily in that dataset. This creates major performance issues when using data from other networks or datasets. This project is better viewed as a demonstration of detection using the CICIDS2017 as a baseline rather a general-purpose IDS.

## What it does

- Accepts `.pcap`, `.pcapng`, and pre-extracted `.csv` files.
- Groups TCP and UDP packets into bidirectional flows.
- Extracts CICIDS2017-compatible network features using Scapy.
- Detects anomalous flows with Isolation Forest and Local Outlier Factor.
- Shows anomaly totals, charts, flow-level predictions, and downloadable reports.
- Calculates evaluation metrics when uploaded data contains ground-truth labels.
- Stores previous prediction results so they can be reviewed later.
- Displays these prediction results on a dashboard

## Basic workflow

1. A user uploads a packet capture or feature CSV through the Flask dashboard.
2. PCAP files are parsed and divided into flows using active and idle timeout thresholds.
3. Flow features are cleaned, aligned with the training feature set, and standardised.
4. The trained models score each flow using thresholds selected during evaluation.
5. The results are displayed in a dashboard with summary cards, charts, a prediction table, and CSV export.

## Lessons learned

This project helped me understand the challenges of turning a machine learning experiment into a complete application. In particular, I gained practical experience in packet processing, network-flow feature extraction, data preprocessing, anomaly detection, and building a web interface around a machine learning pipeline.
