import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, updateDoc, doc, docData, deleteDoc, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Champion } from '../models/champion';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  championCollection: CollectionReference;


  constructor(private firestore: Firestore) {
    this.championCollection = collection(this.firestore, 'loldetails');
  }

  // Obtener todas las Champions
  getCompanies(): Observable<Champion[]> {
    return collectionData(this.championCollection, { idField: 'id' }) as Observable<Champion[]>;
  }

  // Obtener una Champion por ID
  getChampion(id: string): Observable<Champion | undefined> {
    const ChampionDocRef = doc(this.firestore, `loldetails/${id}`);
    return docData(ChampionDocRef) as Observable<Champion | undefined>;
  }

  // Agregar una nueva Champion
  addChampion(Champion: Champion): Promise<void> {
    return addDoc(this.championCollection, Champion) as unknown as Promise<void>;
  }

  // Actualizar una Champion existente
  updateChampion(id: string, Champion: Partial<Champion>): Promise<void> {
    const ChampionDocRef = doc(this.firestore, `loldetails/${id}`);
    return updateDoc(ChampionDocRef, Champion) as Promise<void>;
  }

  // Eliminar una Champion
  deleteChampion(id: string): Promise<void> {
    const ChampionDocRef = doc(this.firestore, `loldetails/${id}`);
    return deleteDoc(ChampionDocRef) as Promise<void>;
  }
}